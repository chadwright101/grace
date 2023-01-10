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
        className={`w-full h-full lg:-z-20 lg:relative ${imageClasses}`}
        src={src}
        alt={alt}
        loading="lazy"
        width={1024}
        height={682}
      />
      <div className={`px-6 ${childrenClasses}`}>{children}</div>
    </>
  );
};

export default ImageContainer;
