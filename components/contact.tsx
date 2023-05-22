import Image from "next/image";
import Link from "next/link";
import contactImage from "../public/images/grace-1.jpg";
import loopImage from "../public/images/loop.jpg";
import facebookIcon from "../public/images/social/icons8-facebook-60.png";

const Contact = () => {
  return (
    <article className="flex flex-col gap-6 items-center mx-6 mt-12 mb-8">
      <Image
        className="w-24 h-[62px]"
        src={loopImage}
        alt="Grace loop graphic"
      />
      <h2 className="uppercase text-4xl">Contact</h2>
      <div className="flex flex-col gap-12 md:flex-row lg:gap-24">
        <Image
          src={contactImage}
          alt="A woman holding here face showing signs of a facelift"
          className="w-[397px] h-auto"
          height={397}
          width={420}
          sizes="(max-width: 400px) 100vw, (max-width: 700px) 100vw, (max-width: 1000px) 100vw, 100vw"
        />
        <ul className="flex flex-col gap-4 text-lg items-center md:text-center md:justify-center">
          <li className="flex flex-wrap items-center gap-x-1.5 justify-center">
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
          <li>Fax: 044 533 4385</li>
          <li>Plettenberg Bay</li>
          <li>Practice No: 1531905</li>
          <li>
            <Link
              className=""
              href="https://www.facebook.com/GRACE-Garden-Route-Aesthetic-Centre-of-Excellence-1069855396509330/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-12 h-12 md:w-14 md:h-14 lg:w-10 lg:h-10 lg:hover:opacity-70"
                src={facebookIcon}
                alt="Facebook logo"
                loading="lazy"
              />
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Contact;
