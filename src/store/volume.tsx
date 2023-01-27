import { atom } from "recoil";

export const volumeState = atom<number>({
  key: "volumeState",
  default: 0,
});
