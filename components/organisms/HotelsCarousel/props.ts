import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly imageHeight: number;
};
