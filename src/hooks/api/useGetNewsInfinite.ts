import { useInfiniteQuery } from "@tanstack/react-query";
import flatten from "lodash/flatten";

import { type Infinite } from "./type";

import { get } from "@/libs/api";

export interface News {
  id: number;
  startDate: string;
  endDate: string;
  detail: string;
}

interface Response extends Infinite {
  content: News[];
}

const NEWS_QUERY_KEY = "news";

const SIZE = 10;

const getNews = (page: number) =>
  get<Response>(`/news?page=${page}&size=${SIZE}&sort=startDate,DESC`);

export default function useGetNewsInfinite() {
  const query = useInfiniteQuery<Response>(
    [NEWS_QUERY_KEY],
    async ({ pageParam = 0 }) => await getNews(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.last) return undefined;
        return lastPage.number + 1 ?? undefined;
      },
    },
  );

  const news = query.data ? flatten(query.data.pages.map((page) => page.content)) : [];

  return { news, ...query };
}
