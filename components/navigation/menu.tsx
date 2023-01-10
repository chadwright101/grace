import { useState } from "react";
import Image from "next/image";
import menuIcon from "../../public/icons/menu-icon.svg";
import closeMenuIcon from "../../public/icons/close-icon.svg";

interface Props {
  menuList: Array<MenuProps>;
  classes?: string;
}

const Menu = ({ menuList, classes }: Props) => {
  const [toggle, menuToggle] = useState(false);
  return (
    <header className={classes}>
      <button
        className="w-full py-1.5 border-b border-b-black md:absolute md:border-none md:top-2 md:right-2 md:w-16 lg:hidden"
        onClick={() => menuToggle(!toggle)}
      >
        {!toggle ? (
          <Image className="w-10 h-10 m-auto" src={menuIcon} alt="Menu icon" />
        ) : (
          <Image
            className="w-10 m-auto md:fixed md:translate-x-3"
            src={closeMenuIcon}
            alt="Close menu icon"
          />
        )}
      </button>
      {toggle && (
        <div>
          <ul className="flex flex-col items-center gap-y-5 text-xl py-4 border-b border-b-black font-MrsEaves md:w-64 md:bg-white/95 md:fixed md:top-0 md:right-0 -z-10 md:h-screen md:items-end md:pt-24 md:text-2xl">
            {menuList.map(({ title, href }, index) => (
              <MenuListMap key={index} title={title} href={href} />
            ))}
          </ul>
          <div className="fixed hidden h-screen w-screen -z-20 bg-black/50 md:block"></div>
        </div>
      )}
      <ul className="hidden lg:flex fixed w-full bg-white justify-center py-2 font-MrsEaves text-xl drop-shadow-lg">
        {menuList.map(({ title, href }, index) => (
          <MenuListMap key={index} title={title} href={href} />
        ))}
      </ul>
    </header>
  );
};

interface MenuProps {
  title: string;
  href: string;
}

const MenuListMap = ({ title, href }: MenuProps) => {
  return (
    <li>
      <a className="py-2 px-6" href={href}>
        {title}
      </a>
    </li>
  );
};

export default Menu;
