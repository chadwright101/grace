import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  imageClasses?: string;
  src: string;
  alt: string;
  children?: ReactNode;
  childrenClasses?: string;
}

const ImageContainer = ({
  imageClasses,
  src,
  alt,
  children,
  childrenClasses,
}: Props) => {
  return (
    <>
      <Image
        className={`object-cover w-full h-auto lg:-z-20 lg:relative ${imageClasses}`}
        src={src}
        alt={alt}
        loading="lazy"
        width={1280}
        height={700}
        sizes="(max-width: 400px) 100vw, (max-width: 700px) 100vw, (max-width: 1000px) 100vw, 100vw"
      />
      <div className={`px-6 ${childrenClasses}`}>{children}</div>
    </>
  );
};

export default ImageContainer;
