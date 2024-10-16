import type { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import "./Slideshow.css";

export interface SlideshowProps extends HTMLAttributes<HTMLLIElement> {
  numbered?: boolean;
}

export const Slideshow = ({
  children,
  numbered,
}: PropsWithChildren<SlideshowProps>) => (
  <ol
    className={clsx(
      "kernteam-slideshow",
      numbered && "kernteam-slideshow--numbered"
    )}
  >
    {children}
  </ol>
);
