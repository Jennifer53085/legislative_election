import "../style/Event.scss";
import Event_1 from "../img/event-1.webp";
import Event_2 from "../img/event-2.webp";
import Event_3 from "../img/event-3.webp";

interface HomeProps {
  data: {
    ref: React.RefObject<HTMLDivElement>;
    text: string;
    title: string;
  };
}

function Event({ data }: HomeProps) {
  type listType = {
    date: string;
    article: string;
    title: string;
    src:string;
  };

  const listItmes: listType[] = [
    {
      date: "2023/12/26",
      title: "參與台北寵物論壇，爭取貓咪友善環境",
      article:
        "炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
        src:Event_1
    },
    {
      date: "2023/12/24",
      title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
      article:
        "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
        src:Event_2
    },
    {
      date: "2023/12/20",
      title: "收容所模特兒大比拼！",
      article:
        "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
        src:Event_3
    },
  ];
  return (
    <div className="event_container">
      <div className="label">{data.text}</div>
      <div className="title">{data.title}</div>
      <div className="list_container"></div>
    </div>
  );
}

export default Event;
