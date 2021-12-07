import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly imageUrl?: string;
  readonly onClick?: () => void;
};
