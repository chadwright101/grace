import Image from "next/image";
import Link from "next/link";
import graceLogo from "../public/images/grace-logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="py-4 bg-veryLightPeach md:flex md:gap-12 md:px-6 md:justify-around md:items-center">
        <Image
          className="hidden md:block h-[130px] w-[342px]"
          src={graceLogo}
          alt="Grace logo"
        />
        <ul className="flex flex-col gap-4 items-center text-lg md:items-end md:text-right">
          <li>
            Email:{" "}
            <Link
              className="text-blue py-2"
              href="mailto:info@gardenroutebotox.com"
            >
              info@gardenroutebotox.com
            </Link>
          </li>
          <li>
            Tel:{" "}
            <Link className="text-blue py-2" href="tel:044 533 2415">
              044 533 2415
            </Link>
          </li>
          <li>Plettenberg Bay</li>
          <li>Practice No: 1531905</li>
        </ul>
      </div>
      <h6 className="text-lg my-3 text-center">
        ©{" "}
        <Link className="text-blue text-xl py-2" href="/">
          www.gardenroutebotox.com
        </Link>
      </h6>
    </footer>
  );
};

export default Footer;
