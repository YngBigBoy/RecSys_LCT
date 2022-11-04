import cl from "./ProjectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProjectCard = (project) => {
  const navigate = useNavigate();

  return (
    <div
      className={cl.project_card}
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className={cl.project_header}>
        <div className={cl.project_title}>
          <h3>{project.name}</h3>
        </div>
        <div className={cl.project_date}>
          <p>{project.lastUpdate}</p>
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </div>
      </div>
      <div className={cl.project_description}>
        <div className={cl.col}>
          <h4 className={cl.header}>Фильтры:</h4>
          <div className={cl.content}>
            {project.filters.slice(0, 3).map((filter, index) => (
              <div className={cl.item} key={index}>
                <p>{filter.name}</p>
                <span className={cl.horizontal_separator} />
              </div>
            ))}
          </div>
          {project.filters.length > 3 && (
            <p className={cl.footer}>Еще +{project.filters.length - 3}</p>
          )}
        </div>
        <span className={cl.separator} />
        <div className={cl.col}>
          <h4 className={cl.header}>Значения:</h4>
          <div className={cl.content}>
            {project.filters.slice(0, 3).map((item, index) => (
              <div className={cl.item} key={index}>
                <p>{item.values.join(", ")}</p>
                <span className={cl.horizontal_separator} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
