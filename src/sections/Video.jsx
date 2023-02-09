import button from "../assets/play-button.png";

const Video = () => {
  return (
    <div className="Video">
      <button>
        <img src={button} alt="play" />
      </button>
      <h1>How it works</h1>
      <p>
        This app does everything you could want it to do it <br /> is beautifully and
        extremely intuitive to use.
      </p>
    </div>
  );
};

export default Video;
