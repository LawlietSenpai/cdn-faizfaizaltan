module.exports = app => {
  const freelancers = require("../controllers/freelancer.controller.js");

  var router = require("express").Router();

  // Create a new Freelancer
  router.post("/", freelancers.create);

  // Retrieve all Freelancers
  router.get("/", freelancers.findAll);

  // Retrieve all published Freelancers
  router.get("/published", freelancers.findAllPublished);

  // Retrieve a single Freelancer with id
  router.get("/:id", freelancers.findOne);

  // Update a Freelancer with id
  router.put("/:id", freelancers.update);

  // Delete a Freelancer with id
  router.delete("/:id", freelancers.delete);

  // Delete all Freelancers
  router.delete("/", freelancers.deleteAll);

  app.use('/api/freelancers', router);
};
