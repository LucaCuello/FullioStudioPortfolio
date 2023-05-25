import "./ProjectCard.css";

export const ProjectCard = () => {
  return (
    <div className="card-container">
      <div className="portrait-container">
        <img src="https://i.imgur.com/JX3XK7G.png" alt="portrait" />
      </div>
      <div className="card-body-container">
        <h2 className="card-title">Project Title</h2>
        <h3 className="card-subtitle">Project Subtitle</h3>
        <p className="card-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti a ullam
          dolorem, nisi voluptas architecto earum ut voluptatum. Autem exercitationem
          voluptatum nulla beatae odit molestias, reiciendis eligendi omnis
          perferendis unde in dolor accusamus corporis sit blanditiis, quam numquam
          quibusdam accusantium!
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};
