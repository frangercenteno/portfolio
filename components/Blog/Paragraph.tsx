import clsx from "clsx";
import { FC, ReactChild } from "react";

interface ParagraphProps {
	children: ReactChild;
	className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p className={clsx("mb-3", className)}>{children}</p>
  );
};

export default Paragraph;
