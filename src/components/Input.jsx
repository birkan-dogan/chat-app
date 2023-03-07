import Img from "../images/img.png";
import Attach from "../images/attach.png";

const Input = function () {
  return (
    <form className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="input-file" />
        <label htmlFor="input-file">
          <img src={Attach} alt="" />
        </label>
        <input type="file" style={{ display: "none" }} id="input-file" />
        <label htmlFor="input-file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </form>
  );
};

export default Input;
