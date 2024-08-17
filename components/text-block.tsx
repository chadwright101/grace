import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  heading: string;
  paragraph?: string;
  children?: ReactNode;
}

const TextBlock = ({ heading, children, paragraph }: Props) => {
  return (
    <div className="my-12">
      <div className="flex flex-col gap-6 items-center mx-6">
        <Image
          className="w-24 h-[62px]"
          src="/images/loop.jpg"
          alt="Grace loop graphic"
          width={100}
          height={65}
        />
        <h2 className="uppercase text-4xl">{heading}</h2>
        <p className="text-justify text-lg">{paragraph}</p>
      </div>
      <div className="mx-6 mt-6">{children}</div>
    </div>
  );
};

export default TextBlock;
