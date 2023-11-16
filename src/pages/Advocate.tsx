import "../style/Advocate.scss";
import mainImg from "../img/mao.png";

interface HomeProps {
  data: {
    ref: React.RefObject<HTMLDivElement>;
    text: string;
    title: string;
  };
}

function Advocate({ data }: HomeProps) {
  return (
    <div className="advocate_background">
    <div className="advocate_container">
      <div className="text_container">
        <div className="advocate_label">{data.text}</div>
        <div className="advocate_title">{data.title}</div>
        <div className="advocate_article_title">
          我堅信 ! 藉由推動更完善的<span>貓咪福利</span>
          和相關政策，更是間接地投資於<span>台灣的未來</span>。
        </div>
        <p className="advocate_article_content">
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
          GDP 經濟帶來巨大效益。
        </p>
        <p className="advocate_article_content">
          因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </div>
      <img src={mainImg} alt="advocate" />
    </div>
    </div>
  );
}

export default Advocate;
