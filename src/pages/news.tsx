import styled from "styled-components";

import { APPBAR_HEIGHT } from "@/components/AppBar";
import LoadingHandler from "@/components/LoadingHandler";
import News from "@/components/news/News";
import useGetNewsInfinite from "@/hooks/api/useGetNewsInfinite";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function NewsPage() {
  const { news, isLoading, hasNextPage, fetchNextPage } = useGetNewsInfinite();

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <LoadingHandler isLoading={isLoading}>
      <Wrapper>
        {news.map((eachNews) => (
          <News
            key={eachNews.id}
            id={eachNews.id}
            startDate={eachNews.startDate}
            endDate={eachNews.endDate}
            detail={eachNews.detail}
          />
        ))}

        {hasNextPage && <div ref={setTarget} />}
      </Wrapper>
    </LoadingHandler>
  );
}

const Wrapper = styled.main`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: calc(100vh - ${APPBAR_HEIGHT});
  overflow: scroll;
`;
