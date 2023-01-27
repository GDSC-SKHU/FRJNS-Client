import { useState } from "react";
import { Window, WindowHeader } from "react95";
import dynamic from "next/dynamic";
import styled from "styled-components";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import { type Video } from "@/hooks/api/useGetVideosInfinite";

export type Props = Omit<Video, "id">;

export default function Video({ url, title }: Props) {
  const { isPlaying, setTarget } = useAutoPlay();

  return (
    <StyledWrapper>
      <StyledWindow ref={setTarget}>
        <WindowHeader style={{ overflow: "scroll", width: "100%" }}>{title}</WindowHeader>

        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          style={{ aspectRatio: "9 / 10" }}
          playing={isPlaying}
          controls={false}
          muted
          loop
        />
      </StyledWindow>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.article`
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  padding: 4px 6px;
`;

const StyledWindow = styled(Window)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function useAutoPlay() {
  const [isPlaying, setIsPlaying] = useState(false);

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    },
  });

  return { isPlaying, setTarget };
}
