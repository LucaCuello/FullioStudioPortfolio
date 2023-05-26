import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  portrait: string;
  isRightSide: boolean;
};

export const ProjectCard = ({
  title,
  subtitle,
  description,
  portrait,
  isRightSide,
}: ProjectCardProps) => {
  return (
    <div className="card-container">
      <div className="portrait-container" style={{ order: isRightSide ? 1 : -1 }}>
        <img src={portrait} alt="Portrait" className="portrait" />
      </div>
      <div className="card-body-container">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-description text">{description}</p>
        <button className="card-button">Read more</button>
      </div>
    </div>
  );
};
