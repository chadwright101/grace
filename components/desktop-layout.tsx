import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classes?: string;
}

const DesktopLayout = ({ children, classes }: Props) => {
  return (
    <article className={`lg:w-10/12 xl:w-[1024px] lg:m-auto ${classes}`}>
      {children}
    </article>
  );
};

export default DesktopLayout;
