import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

function ProjectList({ projects, onSave }) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  //   return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
  //   return (
  //     <ul className="row">
  //       {projects.map((project) => (
  //         <li key={project.id}>{project.name}</li>
  //       ))}
  //     </ul>
  //   );
  const items = projects.map((project, id) => (
    <div key={id} className="cols-sm" style={{margin: "auto"}}>
      {projectBeingEdited === project ? (
        // <ProjectForm
        //   project={project}
        //   onSave={onSave}
        //   onCancel={cancelEditing}
        // />
        <></>
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));
  return <div className="row">{items}</div>;
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProjectList;
