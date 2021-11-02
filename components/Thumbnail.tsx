import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1280}
      height={720}
      loader={({ src }) => `${src}?auto=format&q=80`}
      blurDataURL={`${src}?base64`}
    />
  );
  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Thumbnail;
