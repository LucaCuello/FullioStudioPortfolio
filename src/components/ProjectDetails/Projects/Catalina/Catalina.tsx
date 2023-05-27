import video1 from "./Assets/1.mp4";
import image10 from "./Assets/10.jpg";
import image11 from "./Assets/11.jpg";
import image12 from "./Assets/12.jpg";
import image13 from "./Assets/13.jpg";
import image14 from "./Assets/14.jpg";
import image15 from "./Assets/15.jpg";
import image16 from "./Assets/16.jpg";
import image2 from "./Assets/2.jpg";
import image3 from "./Assets/3.jpg";
import video4 from "./Assets/4.mp4";
import video5 from "./Assets/5.mp4";
import image6 from "./Assets/6.jpg";
import video7 from "./Assets/7.mp4";
import video8 from "./Assets/8.mp4";
import video9 from "./Assets/9.mp4";
import canva1 from "./Assets/canva1.jpg";
import canva2 from "./Assets/canva2.jpg";
import canva3 from "./Assets/canva3.jpg";
import canva4 from "./Assets/canva4.jpg";
import canva5 from "./Assets/canva5.jpg";
import canva6 from "./Assets/canva6.jpg";
import canva7 from "./Assets/canva7.jpg";
import canva8 from "./Assets/canva8.jpg";
import canva9 from "./Assets/canva9.jpg";

export const Catalina = () => {
  return (
    <>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video">
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className="image-container-normal">
        <img src={image2} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image3} className="image" alt="image" draggable={false} />
      </div>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video">
          <source src={video4} type="video/mp4" />
        </video>
      </div>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video">
          <source src={video5} type="video/mp4" />
        </video>
      </div>
      <div className="image-container-normal">
        <img src={image6} className="image" alt="image" draggable={false} />
      </div>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video">
          <source src={video7} type="video/mp4" />
        </video>
      </div>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video">
          <source src={video8} type="video/mp4" />
        </video>
      </div>
      <div className="video-container-normal">
        <video autoPlay muted loop className="video">
          <source src={video9} type="video/mp4" />
        </video>
      </div>
      <div className="image-container-normal">
        <img src={image10} className="image" alt="image" draggable={false} />
      </div>
      <h2 className="title catalina-title">Reels made for the brand's IG Account</h2>
      <div className="image-container-reel">
        <img src={canva1} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva2} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva3} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva4} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva5} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva6} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva7} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva8} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-reel">
        <img src={canva9} className="image" alt="image" draggable={false} />
      </div>
      {/* Canvas comp */}
      <h2 className="title catalina-title">Potential IG Feed</h2>
      <div className="image-container-normal">
        <img src={image11} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image12} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image13} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image14} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image15} className="image" alt="image" draggable={false} />
      </div>
      <div className="image-container-normal">
        <img src={image16} className="image" alt="image" draggable={false} />
      </div>
    </>
  );
};
