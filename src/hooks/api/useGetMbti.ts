import { useQuery } from "@tanstack/react-query";

import { get } from "@/libs/api";

const MBTI_QUERY_KEY = "mbti";

interface Props {
  mbti: string | string[] | undefined;
}

interface Match {
  sourceMbti: string;
  targetName: string;
  imageUrl: string;
  content: string;
}

type Response = Match[];

const getMbti = (mbti: Props["mbti"]) => {
  if (typeof mbti !== "string") return null;

  return get<Response>(`/mbti/${mbti}`);
};

export default function useGetMbti({ mbti }: Props) {
  const query = useQuery([MBTI_QUERY_KEY, mbti], () => getMbti(mbti));

  return query;
}
