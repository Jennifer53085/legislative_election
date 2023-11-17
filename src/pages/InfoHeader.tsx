import React, { useRef, RefObject } from "react";
import "../style/InfoHeader.scss";
import Candidate from "../img/candidateMan.png";
import Cloud from "../img/cloud.svg";
import useDevice from "../utils/device";

function InfoHeader() {
  const device = useDevice();
  return (
    <header>
      <div className="header_title">
        <span>台灣的明天</span>
        {device === "mobile" ? <br /> : " "}
        <span>喵先鋪路</span>
      </div>

      <div className="candidate_info">
        <div id="info_title">2024 立委參選人</div>
        <div id="info_name">
          <div>3</div>喵立翰 Miao Li-Han
        </div>
      </div>

      <div className="candidate_img">
        <img src={Cloud} alt="Cloud" id="cloud" />
        <img src={Candidate} alt="Candidate" id="candidate"/>
      </div>
      <div className="marquee">
        <div>&nbsp;&nbsp;為喵星人，護台灣 ! 從喵的眼中，看見台灣 喵的未來，人的希望 </div>
        <div>&nbsp;&nbsp;為喵星人，護台灣 ! 從喵的眼中，看見台灣 喵的未來，人的希望 </div>
      </div>
    </header>
  );
}

export default InfoHeader;
