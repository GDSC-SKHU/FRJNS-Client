import { Button } from "react95";
import Link from "next/link";
import styled from "styled-components";

export default function WhenError() {
  return (
    <Wrapper>
      <h1>Error !</h1>
      <Link href="/">
        <Button>go home</Button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
