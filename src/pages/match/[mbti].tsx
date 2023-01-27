/* eslint-disable @next/next/no-img-element */
import { Frame, Window, WindowContent, WindowHeader } from "react95";
import { useRouter } from "next/router";
import styled from "styled-components";

import { APPBAR_HEIGHT } from "@/components/AppBar";
import LoadingHandler from "@/components/LoadingHandler";
import WhenError from "@/components/WhenError";
import useGetMbti from "@/hooks/api/useGetMbti";

export default function Mbti() {
  const router = useRouter();

  const { mbti } = router.query;

  const { data, isLoading, isError } = useGetMbti({ mbti });

  return (
    <LoadingHandler isLoading={isLoading}>
      <Wrapper>
        {isError && <WhenError />}

        {data?.map((eachData) => (
          <StyledWindow key={eachData.targetName}>
            <WindowHeader>{eachData.targetName}</WindowHeader>
            <WindowContent>
              <ImageWrapper>
                <Img src={eachData.imageUrl} alt={eachData.targetName} />
              </ImageWrapper>

              <Frame variant="well" style={{ padding: "12px 14px" }}>
                {eachData.content}
              </Frame>
            </WindowContent>
          </StyledWindow>
        ))}
      </Wrapper>
    </LoadingHandler>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - ${APPBAR_HEIGHT});
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 20px;
`;

const StyledWindow = styled(Window)`
  width: 80%;
  margin: 0 auto;
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  margin-bottom: 12px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
