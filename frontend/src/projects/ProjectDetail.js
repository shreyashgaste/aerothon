import React, { useEffect } from 'react';
import { Project } from './Project';

export default function ProjectDetail({ project }) {
  useEffect(()=>{
    console.log(project,"pro")
  },[])
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          {/* <img className="rounded" src={project.imageUrl} alt={project.name} /> */}
          <section className="section dark">
            <h3 className="strong">
              <strong>{project.partName}</strong>
            </h3>
            <p>{project.materialComposition}</p>
            <p>{project.age}</p>
            <p>{project.condition}</p>
            <p>{project.location}</p>
            <p>{project.manufacturer}</p>
            <p>{project.aircraftModel}</p>
            <p>{project.potentialUseCases}</p>
            <p>{project.newPartsCarbonFootprint}</p>
            <p>{project.recycledPartsCarbonFootprint}</p>
            <p>{project.waterUsageNewParts}</p>
            <p>{project.waterUsageRecycledParts}</p>
            <p>{project.landfillWasteNewParts}</p>
            <p>{project.landfillWasteRecycledParts}</p>
            <p>{project.energyConsumptionNewParts}</p>
            <p>{project.energyConsumptionRecycledParts}</p>
            <p>{project.recyclingRate}</p>
            <p>{project.toxicityScoreNewParts}</p>
            <p>{project.toxicityScoreRecycledParts}</p>
            <p>{project.remanufacturingPotential}</p>
            <p>{project.lifeCycleAssessment}</p>
            <p>{project.renewableMaterialContent}</p>
            <p>{project.carbonFootprintSaved}</p>
            <p>{project.waterUsageSaved}</p>
            <p>{project.landfillWasteSaved}</p>
            <p>{project.energyConsumptionSaved}</p>
            <p>{project.toxicityScoreDifference}</p>
            <p>{project.lifeCycleAssessmentScore}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
