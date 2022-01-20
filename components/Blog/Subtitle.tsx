import clsx from "clsx";
import { FC, ReactChild } from "react";

interface SubtitleProps { 
	children: ReactChild; 
	className?: string;
}

const Subtitle: FC<SubtitleProps> = ({ children, className }) => {
  return (
    <h2 className={clsx("text-3xl mb-3 font-bold", className)}>{children}</h2>
  );
};

export default Subtitle;
