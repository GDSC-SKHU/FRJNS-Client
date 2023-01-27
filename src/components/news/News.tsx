import { Window, WindowContent, WindowHeader } from "react95";
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
      <WindowHeader>{startDate === endDate ? startDate : `${startDate} ~ ${endDate}`}</WindowHeader>
      <WindowContent>{detail}</WindowContent>
    </StyledWindow>
  );
}

const StyledWindow = styled(Window)`
  width: 90%;
  margin: 0 auto;
`;
