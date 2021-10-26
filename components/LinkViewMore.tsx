import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkViewMoreProps {
  url: string;
}

const LinkViewMore: FC<LinkViewMoreProps> = ({ url }) => {
  return (
    <div className="mt-6 max-w-3xl m-auto">
      <Link href={url}>
        <a className="text-secondary-lighter text-base hover:text-secondary-lighter flex items-center">
          <span className="block mr-2">Ver más</span>

          <Image
            src="/img/icons/arrow.svg"
            alt="next"
            layout="intrinsic"
            width="15"
            height="15"
          />
        </a>
      </Link>
    </div>
  );
};

export default LinkViewMore;
