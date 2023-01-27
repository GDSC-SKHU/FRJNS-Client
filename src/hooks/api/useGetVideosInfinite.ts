import { useInfiniteQuery } from "@tanstack/react-query";
import flatten from "lodash/flatten";

import { type Infinite } from "./type";

import { get } from "@/libs/api";

export interface Video {
  id: number;
  title: string;
  url: string;
}

interface Response extends Infinite {
  content: Video[];
}

const VIDEO_QUERY_KEY = "videos";

const SIZE = 3;

const getVideos = (page: number) => get<Response>(`/videos?page=${page}&size=${SIZE}`);

export default function useGetVideosInfinite() {
  const query = useInfiniteQuery<Response>(
    [VIDEO_QUERY_KEY],
    async ({ pageParam = 0 }) => await getVideos(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.last) return undefined;
        return lastPage.number + 1 ?? undefined;
      },
    },
  );

  const videos = query.data ? flatten(query.data.pages.map((page) => page.content)) : [];

  return { videos, ...query };
}
