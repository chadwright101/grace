import DesktopLayout from "./desktop-layout";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="bg-veryLightPeach border-b-[3px] border-b-lightPeach grid place-items-center pt-4 pb-2 gap-5 lg:pt-[70px] lg:pb-4">
        <Image
          className="h-auto w-[275px] sm:w-[325px]"
          src="/images/grace-logo.png"
          alt="Grace logo"
          priority
          height={130}
          width={342}
          sizes="(max-width: 400px) 100vw, (max-width: 700px) 100vw, (max-width: 1000px) 50vw, 50vw"
        />
        <h3 className="text-xl text-center w-72 lg:w-96">
          Garden Route Aesthetic Centre of Excellence
        </h3>
      </div>
      <DesktopLayout classes="lg:mt-8">
        <Image
          className="w-full h-full object-cover lg:-z-20 lg:relative"
          src="/images/grace-4.jpg"
          alt="Older woman with smooth skin"
          priority
          height={600}
          width={1024}
          sizes="(max-width: 400px) 100vw, (max-width: 700px) 100vw, (max-width: 1000px) 100vw, 100vw"
        />
      </DesktopLayout>
    </div>
  );
};

export default Header;
