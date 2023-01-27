import { Frame, Window, WindowContent, WindowHeader } from "react95";
import styled from "styled-components";

export interface News {
  id: number;
  startDate: string;
  endDate: string;
  detail: string;
}

export default function News({ startDate, endDate, detail }: News) {
  return (
    <StyledWindow>
      <WindowHeader>{detail}</WindowHeader>
      <WindowContent>
        <Frame variant="well">
          {startDate} ~ {endDate}
        </Frame>
      </WindowContent>
    </StyledWindow>
  );
}

const StyledWindow = styled(Window)`
  width: 100%;
`;
