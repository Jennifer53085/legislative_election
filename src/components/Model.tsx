import "../style/Model.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface props{
  title:string;
}

function Model({title}:props) {
  return <div className="model_background">
    <div className="model_container">
      <div className="model_header">
        <div className="model_title">{title}</div>
        <div className="close_button"><FontAwesomeIcon icon={faXmark} /></div>
      </div>
    </div>
  </div>;
}

export default Model;
