import { useState } from "react";
import { Window, WindowHeader } from "react95";
import dynamic from "next/dynamic";
import styled from "styled-components";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export interface Video {
  id: number;
  url: string;
  title: string;
  uploader: string;
}

export default function Video({ url, title, uploader }: Video) {
  const { isPlaying, setTarget } = useAutoPlay();

  return (
    <StyledWindow ref={setTarget}>
      <WindowHeader style={{ overflow: "scroll", width: "100%" }}>
        {title} - {uploader}
      </WindowHeader>

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
  );
}

const StyledWindow = styled(Window)`
  position: relative;
  overflow: hidden;
  scroll-snap-align: center;
  flex-shrink: 0;
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
