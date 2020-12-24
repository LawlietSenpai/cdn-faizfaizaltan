const db = require("../models");
const Freelancer = db.freelancers;
const Op = db.Sequelize.Op;

// Create and Save a new Freelancer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Freelancer
  const freelancer = {    
    published: req.body.published ? req.body.published : false,
    username: req.body.username,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    hobby: req.body.hobby,
    skillset: req.body.skillset    
  };

  // Save Freelancer in the database
  Freelancer.create(freelancer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Freelancer."
      });
    });
};

// Retrieve all Freelancers from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  Freelancer.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving freelancers."
      });
    });
};

// Find a single Freelancer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Freelancer.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Freelancer with id=" + id
      });
    });
};

// Update a Freelancer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Freelancer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Freelancer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Freelancer with id=${id}. Maybe Freelancer was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Freelancer with id=" + id
      });
    });
};

// Delete a Freelancer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Freelancer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Freelancer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Freelancer with id=${id}. Maybe Freelancer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Freelancer with id=" + id
      });
    });
};

// Delete all Freelancers from the database.
exports.deleteAll = (req, res) => {
  Freelancer.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Freelancers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all freelancers."
      });
    });
};

// find all published Freelancer
exports.findAllPublished = (req, res) => {
  Freelancer.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving freelancers."
      });
    });
};
