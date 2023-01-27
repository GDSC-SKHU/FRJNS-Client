import styled from "styled-components";

import { APPBAR_HEIGHT } from "@/components/AppBar";
import Video, { type Video as VideoInterface } from "@/components/videos/Video";

const MOCK_VIDEOS: VideoInterface[] = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=LjNKUy4hr5c",
    title: "[릴레이댄스] NewJeans(뉴진스) - Attention (4K)",
    uploader: "M2",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=0HcxRYs51Ys",
    title: "[K-Fancam] 뉴진스 해린 직캠 'OMG' (NewJeans HAERIN Fancam) l @MusicBank 230120",
    uploader: "KBS KPOP",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=JBwIdrir5vw",
    title: "[안방1열 직캠4K] 뉴진스 해린 'OMG' (NewJeans HAERIN FanCam) @SBS Inkigayo 230115",
    uploader: "스브스케이팝",
  },
];

export default function Home() {
  return (
    <Wrapper>
      {MOCK_VIDEOS.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          url={video.url}
          title={video.title}
          uploader={video.uploader}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: calc(100vh - ${APPBAR_HEIGHT});
  overflow: scroll;
  scroll-snap-type: y mandatory;
`;
