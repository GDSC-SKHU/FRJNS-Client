import { type PropsWithChildren, useEffect, useState } from "react";
import styled from "styled-components";

import { APPBAR_HEIGHT } from "./AppBar";
import LoadingProgressBar from "./LoadingProgressBar";

interface Props extends PropsWithChildren {
  isLoading: boolean;
}

export default function LoadingHandler({ children, isLoading }: Props) {
  const [isEnd, setIsEnd] = useState(!isLoading);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsEnd(true);
      }, 1000);
    }
  }, [isLoading]);

  return (
    <>
      {isEnd ? (
        children
      ) : (
        <Wrapper>
          <LoadingProgressBar isLoading={isLoading} />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${APPBAR_HEIGHT});
  display: flex;
  justify-content: center;
  align-items: center;
`;
