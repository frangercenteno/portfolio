import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkViewMoreProps {
  url: string;
  name?: string;
}

const LinkViewMore: FC<LinkViewMoreProps> = ({ url, name }) => {
  return (
    <div className="mt-6">
      <Link
        href={url}
        className="text-secondary-lighter text-base hover:text-secondary-dark flex items-center"
      >
        <span className="block mr-2">{name ? name : "Ver más"}</span>

        <Image
          src="/img/icons/arrow.svg"
          alt="next"
          width="15"
          height="15"
        />
      </Link>
    </div>
  );
};

export default LinkViewMore;
