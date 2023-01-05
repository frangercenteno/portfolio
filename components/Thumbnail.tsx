import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface ThumbnailProps {
  title: string;
  src: string;
  slug?: string;
}

const Thumbnail: FC<ThumbnailProps> = ({ title, src, slug }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1280}
      height={720}
      loader={({ src }) => `${src}?auto=format&q=80`}
      blurDataURL={`${src}?base64`}
      unoptimized
    />
  );
  return (
    <>
      {slug ? (
        <Link aria-label={title} href={`/posts/${slug}`}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Thumbnail;
