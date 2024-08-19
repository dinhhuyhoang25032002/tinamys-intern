export let covertObjects = (mongooseObjects) => {
  return mongooseObjects.map((item) => item.toObject());
};

export let convertObject = (mongooseObject) => {
  return mongooseObject ? mongooseObject.toObject() : mongooseObject;
};
