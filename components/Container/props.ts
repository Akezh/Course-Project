import {CSSProperties, HTMLAttributes} from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
    readonly containerStyle?: CSSProperties;
};
