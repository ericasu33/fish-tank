class Plant extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/plant.jpg';
    this.maxSwimSpeed = 40;
    this.makeNewVelocity();
    this.isTasty = false;
  }
}