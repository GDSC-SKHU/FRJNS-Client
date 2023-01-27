import { type ChangeEventHandler, useState } from "react";
import { Button, TextInput, Window, WindowContent, WindowHeader } from "react95";
import styled from "styled-components";

import { APPBAR_HEIGHT } from "@/components/AppBar";

export default function Match() {
  const { onChange, value } = useMBTIInput();

  return (
    <Wrapper>
      <StyledWindow>
        <WindowHeader>What is your MBTI?</WindowHeader>
        <WindowContent style={{ width: "100%" }}>
          <ContentWrapper>
            <TextInput placeholder="ENTJ" value={value} onChange={onChange} />
            <Button>Submit</Button>
          </ContentWrapper>
        </WindowContent>
      </StyledWindow>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - ${APPBAR_HEIGHT});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledWindow = styled(Window)`
  width: 70%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function useMBTIInput() {
  const [value, setValue] = useState<string>("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length > 4) return;

    setValue(e.target.value.toUpperCase());
  };

  return { value, onChange };
}
