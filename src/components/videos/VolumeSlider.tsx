import { Slider } from "react95";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { volumeState } from "@/store/volume";
import { mediaQuery } from "@/styles/media";

export default function VolumeSlider() {
  const [volume, setVolume] = useRecoilState(volumeState);

  return (
    <Wrapper>
      <Slider
        size="100px"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={(value) => {
          setVolume(value);
        }}
        orientation="vertical"
      />
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  position: fixed;
  right: 30px;
  bottom: 40px;
  z-index: 9999;

  ${mediaQuery("xs")} {
    right: 0px;
    bottom: 20px;
  }
`;
