import DesktopLayout from "./desktop-layout";
import Image from "next/image";
import graceLogo from "../public/images/grace-logo.jpg";
import headerImage from "../public/images/grace-4.jpg";

const Header = () => {
  return (
    <div>
      <div className="bg-veryLightPeach border-b-[3px] border-b-lightPeach grid place-items-center pt-4 pb-2 gap-5 lg:pt-[70px] lg:pb-4">
        <Image
          className="h-[130px] w-[342px]"
          src={graceLogo}
          alt="Grace logo"
        />
        <h3 className="text-xl text-center w-72 lg:w-96">
          Garden Route Aesthetic Centre of Excellence
        </h3>
      </div>
      <DesktopLayout classes="lg:mt-8">
        <Image
          className="w-full h-full object-cover lg:-z-20 lg:relative"
          src={headerImage}
          alt="Older woman with smooth skin"
        />
      </DesktopLayout>
    </div>
  );
};

export default Header;
