import type { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import "./Slide.css";

export type SlideAppearance = "text" | "demo" | "title";

const appearanceValues: SlideAppearance[] = ["text", "demo", "title"];

export interface SlideProps extends HTMLAttributes<HTMLLIElement> {
  appearance?: SlideAppearance;
}

export const isSlideAppearance = (arg: unknown): arg is SlideAppearance =>
  typeof arg === "string" && appearanceValues.includes(arg as never);

export const Slide = ({
  appearance,
  className,
  children,
}: PropsWithChildren<SlideProps>) => (
  <li
    className={clsx(
      "kernteam-slide",
      {
        [`kernteam-slide--${appearance}`]: isSlideAppearance(appearance),
      },
      className
    )}
  >
    <div className="kernteam-slide__content">{children}</div>
  </li>
);
