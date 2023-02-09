import question from "../assets/question-circle.png";
import Arrow from "../assets/long-arrow-right.png";
import headset from "../assets/headsetPurple.png";

const Support = () => {
  return (
    <div className="Support" id="Contact">
      <div className="SupportPartition">
        <img src={question} alt="" className="supportPic" />
        <div className="SupportTextArea">
          <h1>View common questions</h1>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi.
          </p>
          <span>
            Read More <img src={Arrow} alt=" " />
          </span>
        </div>
      </div>
      <div className="SupportPartition">
        <img src={headset} alt="" className="supportPic" />
        <div className="SupportTextArea">
          <h1>Looking for support?</h1>
          <p>
            On the other hand, we denounce with righteous dislike so men who are
            beguiled indignation and they foresee.
          </p>
          <span>
            Read More <img src={Arrow} alt=" " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Support;
