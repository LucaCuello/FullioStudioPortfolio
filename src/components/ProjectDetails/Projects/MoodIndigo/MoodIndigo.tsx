import image1 from "./Assets/1.jpg";
import image2 from "./Assets/2.jpg";
import image3 from "./Assets/3.jpg";
import image4 from "./Assets/4.jpg";
import image5 from "./Assets/5.jpg";
import image6 from "./Assets/6.jpg";
import video7 from "./Assets/7.mp4";
import video8 from "./Assets/8.mp4";

export const MoodIndigo = () => {
  return (
    <>
      <div className="image-container-normal">
        <img src={image1} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image2} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image3} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image4} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image5} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image6} className="image" alt="image" draggable={false} />
      </div>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video" playsInline={true}>
          <source src={video7} type="video/mp4" />
        </video>
      </div>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video" playsInline={true}>
          <source src={video8} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
