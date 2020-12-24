# Node.js Rest APIs with Express, Sequelize & MySQL example

## How to Run as localhost
1. Run `npm install`.
2. Run `node server.js`. Navigate to `http://localhost:8080/`.

## Explanation on this development projects.
*Before we start running NodeJS server, you will need to open db.config.js and change the database configuration accordingly:
i. as for the example, I'm running MySQL with access root@localhost with password admin 123 connecting to "cdn" database.

ii. Once running, request trigger by Angular will be routed by freelancer.routes.js where it will check which query path is trigger and called the function accordingly in freelancer.controller.js.

iii. In here, for example create/@POST method will gets the fields value from the body accordingly with Angular passing. After initializing the fields into Freelancer constant, then we will use Sequelize with configuration that we have set at db.config.js for our MySQL configuration connection. Table schema is initialized with freelancer.model.js which Sequelize will used to create the table with the schema in MySQL database.

iv. As for others, it will used the same method as above for all @PUT, @UPDATE, @DELETE & @GET but with different parameter/fields when running script for MySQL database.