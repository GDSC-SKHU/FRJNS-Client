import type original from "react95/dist/themes/original";

import "styled-components";

declare module "styled-components" {
  type OriginalTheme = typeof original;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends OriginalTheme {}
}
