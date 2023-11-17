import "../style/Event.scss";
import Event_1 from "../img/event-1.webp";
import Event_2 from "../img/event-2.webp";
import Event_3 from "../img/event-3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    src: string;
  };

  const listItems: listType[] = [
    {
      date: "2023/12/24",
      title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
      article:
        "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
      src: Event_2,
    },
    {
      date: "2023/12/20",
      title: "收容所模特兒大比拼！",
      article:
        "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
      src: Event_3,
    },
    {
      date: "2023/12/26",
      title: "參與台北寵物論壇，爭取貓咪友善環境",
      article:
        "炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
      src: Event_1,
    },
  ];

  //最新活動放最大
  const latestEvent = [
    listItems.reduce(
      (latest, currentItem: listType) => {
        const currentDate = new Date(currentItem.date);
        const latestDate = new Date(latest?.date);

        if (!latest.date || currentDate > latestDate) {
          return {
            date: currentItem.date,
            article: currentItem.article,
            title: currentItem.title,
            src: currentItem.src,
          };
        } else {
          return latest;
        }
      },
      {
        date: "" as string,
        article: "" as string,
        title: "" as string,
        src: "" as string,
      }
    ),
  ];

  const list = (item: listType[]) =>
    item.map((v: listType, i: number) => (
      <div className="list" key={i}>
        <div className="list_img">
          <img src={v.src} alt={v.title}/>
        </div>
        <div className="list_text_container">
          <div className="list_date">{v.date}</div>
          <div className="list_title">{v.title}</div>
          <div className="list_article">{v.article}</div>
        </div>
      </div>
    ));

  return (
    <div className="event_container">
      <div className="event_label">{data.text}</div>
      <div className="event_title">{data.title}</div>
      <div className="list_container">
        <div className="list_big">{list(latestEvent)}</div>
        <div className="list_small">
          {list(listItems.filter((v,i)=>i<3))}
          <div className="more_events">查看更多&nbsp;<FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
      </div>
    </div>
  );
}

export default Event;
