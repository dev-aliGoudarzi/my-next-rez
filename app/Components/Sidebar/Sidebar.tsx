// React
import React from "react";
// React

// CSS
import styles from "./Sidebar.module.css";
// CSS

// Components
import Link from "next/link";
// Components

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { FaGithub, FaMailBulk, FaTelegram } from "react-icons/fa";
import LinkToOut from "../LinkToOut/LinkToOut";
// Icons

const Sidebar = () => {
  return (
    <aside
      className={`${styles.sidebarContainer} flex flex-col items-center justify-between pb-4`}
    >
      <div className="flex flex-col items-center !gap-y-2">
        <p
          data-theme-effect={"true"}
          data-changeable={"true"}
          className="w-full flex items-center justify-center text-xl !text-white"
        >
          A
        </p>
        <Link
          href={"/"}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Home"
          data-href={"/"}
        >
          <AiOutlineHome />
        </Link>

        <Link
          href={"/about-me"}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About Me"
          data-href={"/about-me"}
        >
          <BsPerson />
        </Link>

        <Link
          href={"/my-skills"}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="My Skills"
          data-href={"/my-skills"}
        >
          <GiSkills />
        </Link>

        <Link
          href={"/my-education"}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="My Education"
          data-href={"/my-education"}
        >
          <MdCastForEducation />
        </Link>
      </div>

      <div className="flex gap-y-6 items-center flex-col">
        <LinkToOut link="dev.aligoudarzi@gmail.com" justCopy>
          <FaMailBulk
            className="cursor-pointer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="My Email : dev.aligoudarzi@gmail.com"
          />
        </LinkToOut>

        <LinkToOut link="https://github.com/dev-aliGoudarzi">
          <FaGithub
            className="cursor-pointer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="My Github"
          />
        </LinkToOut>

        <LinkToOut link="https://t.me/Mobogram_server">
          <FaTelegram
            className="cursor-pointer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="My Telegram"
          />
        </LinkToOut>
      </div>
    </aside>
  );
};

export default Sidebar;
