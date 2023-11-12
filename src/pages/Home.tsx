import React, { useState,useRef, RefObject } from 'react';
import Navbar from "../components/Navbar";
import InfoHeader from '../components/InfoHeader';
import "../style/Home.scss";


function Home() {


    const advocateRef = useRef(null);
    const eventsRef = useRef(null);
    const issuesRef = useRef(null);
    const donationRef = useRef(null);
    const mailRef = useRef(null);

    const sections: {
        ref: RefObject<HTMLDivElement>;
        text: string;
        title: string;
    }[] = [
            { ref: advocateRef, text: "ADVOCATE", title: "候選人主張" },
            { ref: eventsRef, text: "LASTEST EVENTS", title: "最新活動" },
            { ref: issuesRef, text: "POLICY ISSUES", title: "政策議題" },
            { ref: donationRef, text: "DONATION", title: "小額捐款" },
            { ref: mailRef, text: "SERVICE MAILBOX", title: "服務信箱" },
        ]

    return (
        <>
            <Navbar sections={sections} />
            <InfoHeader />
            {sections.map((v, i) => <section key={i} ref={v.ref}></section>)}
        </>
    );
}

export default Home;