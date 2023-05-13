import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import { projectAPI } from './projectAPI';
import { Project } from './Project';

let arr = []
function Wing() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.getWingBasedOnCO2Footprint(currentPage);
        if (currentPage === 1) {
          setProjects(data);
          
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
        function compare(a, b) {

            return +a.carbonFootprintSaved - +b.carbonFootprintSaved;
          }
        arr = projects.sort(compare);
        // setProjects(projects.sort(compare));
        // console.log(arr, "arr")
        console.log(data, "data")
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);
  const saveProject = (project) => {
    projectAPI
      .put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p) => {
          return p.id === project.id ? new Project(updatedProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <>
      <h1>Aircraft Components</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <ProjectList onSave={saveProject} projects={arr} />
      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Wing;
