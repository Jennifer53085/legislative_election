import React, { RefObject } from "react";

import ADVOCATE from "../img/icon/ADVOCATE.svg";
import LATEST_EVENTS from "../img/icon/LATEST_EVENTS.svg";
import POLICY_ISSUES from "../img/icon/POLICY_ISSUES.svg";
import DONATION from "../img/icon/DONATION.svg";
import SERVICE_MAILBOX from "../img/icon/SERVICE_MAILBOX.svg";
import FBIcon from "../img/icon/Property 1=fb.svg";
import IGIcon from "../img/icon/Property 1=ig.svg";
import YTIcon from "../img/icon/Property 1=youtue.svg";

import "../style/Navbar.scss";
import useDevice from "../utils/device";

interface HomeProps {
  sections: {
    ref: RefObject<HTMLDivElement>;
    text: string;
    title: string;
  }[];
}

const Navbar: React.FC<HomeProps> = ({ sections }) => {
  const device = useDevice();
  // 主要導覽列icon切換
  const switchImg = (text: string) => {
    switch (text) {
      case "ADVOCATE":
        return ADVOCATE;
      case "LASTEST EVENTS":
        return LATEST_EVENTS;
      case "POLICY ISSUES":
        return POLICY_ISSUES;
      case "DONATION":
        return DONATION;
      case "SERVICE MAILBOX":
        return SERVICE_MAILBOX;
      default:
        return null;
    }
  };
  // 社交媒體icon陣列
  const mediaList: { icon: string; alt: string }[] = [
    { icon: FBIcon, alt: "facebook" },
    { icon: IGIcon, alt: "instagram" },
    { icon: YTIcon, alt: "youtube" },
  ];

  const scrollTo = (targetRef: RefObject<HTMLDivElement>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="name_container" onClick={scrollToTop}>
        <img src="/logo.svg" alt="logo" />
        <div>喵立翰 Miao Li-Han</div>
      </div>

      <ul className="nav_list">
        {sections.map((v, i) => (
          <li key={i} onClick={() => scrollTo(v.ref)}>
            {device === "desktop" ? (
              <div>{v.title}</div>
            ) : (
              <>
                <img src={switchImg(v.text)} alt={v.text} />
                <div>{v.title}</div>
              </>
            )}
          </li>
        ))}
      </ul>

      {device !== "mobile" && (
        <ul className="mediaGroups">
          {mediaList.map((v, i) => (
            <li key={i}>
              <img src={v.icon} alt={v.alt} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
