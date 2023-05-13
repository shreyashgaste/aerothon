export class Project {
  constructor(initializer) {
    this.id = "";
    this.partName = "";
    this.materialComposition = "";
    this.age = "";
    this.condition = "";
    this.location = "";
    this.manufacturer = "";
    this.aircraftModel = "";
    this.potentialUseCases = "";
    this.newPartsCarbonFootprint = "";
    this.recycledPartsCarbonFootprint = "";
    this.waterUsageNewParts = "";
    this.waterUsageRecycledParts = "";
    this.landfillWasteNewParts = "";
    this.landfillWasteRecycledParts = "";
    this.energyConsumptionNewParts = "";
    this.energyConsumptionRecycledParts = "";
    this.recyclingRate = "";
    this.toxicityScoreNewParts = "";
    this.toxicityScoreRecycledParts = "";
    this.remanufacturingPotential = "";
    this.lifeCycleAssessment = "";
    this.renewableMaterialContent = "";
    this.carbonFootprintSaved = "";
    this.waterUsageSaved = "";
    this.landfillWasteSaved = "";
    this.energyConsumptionSaved = "";
    this.toxicityScoreDifference = "";
    this.lifeCycleAssessmentScore = "";

    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.partName) this.partName = initializer.partName;
    if (initializer.materialComposition)
      this.materialComposition = initializer.materialComposition;
    if (initializer.age) this.age = initializer.age;
    if (initializer.condition) this.condition = initializer.condition;
    if (initializer.location) this.location = initializer.location;

    if (initializer.manufacturer) this.manufacturer = initializer.manufacturer;
    if (initializer.aircraftModel)
      this.aircraftModel = initializer.aircraftModel;

    if (initializer.potentialUseCases)
      this.potentialUseCases = initializer.potentialUseCases;
    if (initializer.newPartsCarbonFootprint)
      this.newPartsCarbonFootprint = initializer.newPartsCarbonFootprint;
    if (initializer.recycledPartsCarbonFootprint)
      this.recycledPartsCarbonFootprint =
        initializer.recycledPartsCarbonFootprint;

    if (initializer.waterUsageNewParts)
      this.waterUsageNewParts = initializer.waterUsageNewParts;
    if (initializer.waterUsageRecycledParts)
      this.waterUsageRecycledParts = initializer.waterUsageRecycledParts;
    if (initializer.landfillWasteNewParts)
      this.landfillWasteNewParts = initializer.landfillWasteNewParts;
    if (initializer.landfillWasteRecycledParts)
      this.landfillWasteRecycledParts = initializer.landfillWasteRecycledParts;
    if (initializer.energyConsumptionNewParts)
      this.energyConsumptionNewParts = initializer.energyConsumptionNewParts;
    if (initializer.energyConsumptionRecycledParts)
      this.energyConsumptionRecycledParts =
        initializer.energyConsumptionRecycledParts;
    if (initializer.recyclingRate)
      this.recyclingRate = initializer.recyclingRate;
    if (initializer.toxicityScoreNewParts)
      this.toxicityScoreNewParts = initializer.toxicityScoreNewParts;

    if (initializer.toxicityScoreRecycledParts)
      this.toxicityScoreRecycledParts = initializer.toxicityScoreRecycledParts;
    if (initializer.remanufacturingPotential)
      this.remanufacturingPotential = initializer.remanufacturingPotential;
    if (initializer.lifeCycleAssessment)
      this.lifeCycleAssessment = initializer.lifeCycleAssessment;
    if (initializer.renewableMaterialContent)
      this.renewableMaterialContent = initializer.renewableMaterialContent;
    if (initializer.carbonFootprintSaved)
      this.carbonFootprintSaved = initializer.carbonFootprintSaved;
    if (initializer.waterUsageSaved)
      this.waterUsageSaved = initializer.waterUsageSaved;
    if (initializer.landfillWasteSaved)
      this.landfillWasteSaved = initializer.landfillWasteSaved;

    if (initializer.energyConsumptionSaved)
      this.energyConsumptionSaved = initializer.energyConsumptionSaved;
    if (initializer.toxicityScoreDifference)
      this.toxicityScoreDifference = initializer.toxicityScoreDifference;
    if (initializer.lifeCycleAssessmentScore)
      this.lifeCycleAssessmentScore = initializer.lifeCycleAssessmentScore;
  }

  isNew() {
    return this.id === undefined;
  }
}
