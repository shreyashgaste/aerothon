import React from 'react';
import { Project } from './Project';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function formatDescription(description) {
  return description.substring(0, 60) + '...';
}

function ProjectCard(props) {
  const { project, onEdit } = props;

  const handleEditClick = (projectBeingEdited) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card" style={{padding: "5px", width: "500px"}}>
      {/* <img src={project.imageUrl} alt={project.name} /> */}
      <section className="section dark">
        
          <h5 className="strong">
            <strong>{project.partName}</strong>
          </h5>
          {/* <p>{formatDescription(project.description)}</p> */}
          <p>Material Composition : {project.materialComposition}</p>
          <p>Age : {project.age} Years</p>
          <p>Condition : {project.condition}</p>
          <p>Location : {project.location}</p>
          <p>Manufacturer : {project.manufacturer}</p>
          
        
        <Link to={'/projects/' + project.id}>
          <span className="icon-edit "></span>
          See Details
        </Link>
      </section>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ProjectCard;
