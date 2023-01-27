import styled from "styled-components";

import { APPBAR_HEIGHT } from "@/components/AppBar";
import LoadingHandler from "@/components/LoadingHandler";
import Video from "@/components/videos/Video";
import useGetVideosInfinite from "@/hooks/api/useGetVideosInfinite";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Home() {
  const { videos, isLoading, hasNextPage, fetchNextPage } = useGetVideosInfinite();

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
        {videos.map((video) => (
          <Video key={video.id} url={video.url} title={video.title} />
        ))}

        {hasNextPage && (
          <div
            ref={setTarget}
            style={{
              width: "10px",
              height: "100vh",
              scrollSnapAlign: "center",
              flexShrink: 0,
            }}
          />
        )}
      </Wrapper>
    </LoadingHandler>
  );
}

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: calc(100vh - ${APPBAR_HEIGHT});
  overflow: scroll;
  scroll-snap-type: y mandatory;
`;
