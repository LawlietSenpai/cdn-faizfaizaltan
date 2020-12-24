module.exports = (sequelize, Sequelize) => {
  const Freelancer = sequelize.define("freelancer", {    
    published: {
      type: Sequelize.BOOLEAN
    },
    username: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    hobby: {
      type: Sequelize.STRING
    },
    skillset: {
      type: Sequelize.STRING
    }

  });

  return Freelancer;
};
