import { AppBar as React95AppBar, Button } from "react95";
import Link from "next/link";
import styled from "styled-components";

export default function AppBar() {
  return (
    <StyledAppBar>
      <h1>FRJNS</h1>

      <ButtonWrapper>
        <Link href="/">
          <Button>videos</Button>
        </Link>
        <Link href="/news">
          <Button>news</Button>
        </Link>
        <Link href="/match">
          <Button>match</Button>
        </Link>
      </ButtonWrapper>
    </StyledAppBar>
  );
}

export const APPBAR_HEIGHT = "50px";

const StyledAppBar = styled(React95AppBar)`
  position: relative;
  height: ${APPBAR_HEIGHT};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
