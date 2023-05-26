import { useParams } from "react-router-dom";
import { projectsData } from "../../routes/Projects/Data";

export const ProjectDetails = () => {
  const getDetails = (id: string) => {
    return projectsData.find((project) => project.id === id);
  };

  const { id } = useParams();

  const project = getDetails(id!);

  return (
    <>
      <h1>{project?.title}</h1>
      <h2>{project?.subtitle}</h2>
    </>
  );
};
