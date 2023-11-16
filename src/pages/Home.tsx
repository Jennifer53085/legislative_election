import React, { useState, useRef, RefObject } from "react";
import Navbar from "../components/Navbar";
import InfoHeader from "./InfoHeader";
import "../style/Home.scss";

import Advocate from "./Advocate";
import Event from "./Event";
import Issue from "./Issue";
import Donation from "./Donation";
import Mailbox from "./Mailbox";

function Home() {
  const advocateRef = useRef(null);
  const eventsRef = useRef(null);
  const issuesRef = useRef(null);
  const donationRef = useRef(null);
  const mailRef = useRef(null);

  type SectionType = {
    ref: React.RefObject<HTMLDivElement>;
    text: string;
    title: string;
  };

  const sections:SectionType[] = [
    { ref: advocateRef, text: "ADVOCATE", title: "候選人主張" },
    { ref: eventsRef, text: "LASTEST EVENTS", title: "最新活動" },
    { ref: issuesRef, text: "POLICY ISSUES", title: "政策議題" },
    { ref: donationRef, text: "DONATION", title: "小額捐款" },
    { ref: mailRef, text: "SERVICE MAILBOX", title: "服務信箱" }
  ];

  const componentsSwitch = (v: SectionType) => {
    switch (v.text) {
        case  "ADVOCATE":
            return <Advocate data={v}/>;
        case "LASTEST EVENTS":
            return <Event data={v}/>;
        case "POLICY ISSUES":
            return <Issue/>;
      default:
        return (
          <>
            <Donation />
            <Mailbox />
          </>
        );
    }
  };

  return (
    <>
      <Navbar sections={sections} />
      <InfoHeader />
      {sections.map((v, i) => (
        <section key={i} ref={v.ref}>{componentsSwitch(v)}</section>
      ))}
    </>
  );
}

export default Home;
