import image1 from "./Assets/1.jpg";
import image2 from "./Assets/2.jpg";
import image3 from "./Assets/3.jpg";
import image4 from "./Assets/4.jpg";
import image5 from "./Assets/5.jpg";

export const ExperimentalLeather = () => {
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
      <div className="image-container-large">
        <img src={image5} className="image" alt="image" draggable={false} />
      </div>
    </>
  );
};
