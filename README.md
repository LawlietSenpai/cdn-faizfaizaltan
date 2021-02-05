# CDN - Faiz Faizal Tan CRUD Example

In this project is a full-stack application (Angular 10 + Node.js + Express + MySQL) example with a CRUD Application. The back-end server uses Node.js + Express for REST APIs, front-end side is an Angular App with HTTPClient. Inside each folder contain its README.md for each application details.

## Project setup

### Node.js Server
```
cd node-js-server
node server.js
```

### Angular Client
```
cd cdn-client
```
Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`.


# Angular CRUD application example with Web API using Node JS with MySQL

## How to Run as localhost

    Run npm install.
    Run ng serve --port 8081 for a dev server. Navigate to http://localhost:8081/. The app will automatically reload if you change any of the source files.

## Explanation on this development projects.

    This web implementation only contains the simple CRUD applications as stated plus I didn't have enough time with the working time. Hope this can meet your expections on the assesment task. This web-project is using Angular JS with NodeJS as REST API and Express for tools connecting to MySQL database. All are run from local environment. As for database connectivity, will be explain in the README.md in node-js-server application.

    First, lets start with the homepage which can be accessed by http://localhost:8081/ OR http://localhost:8081/freelancers. This screen HTML source code was programmed in the freelancer-list.component.html as for the front-end. This screen containing tabulation of list of freelancers information from MySQL database. When this page reloads, it will use @GET method to NodeJS and using Express to connecting to MySQL database. As for the tabulation, I'm using looping of information into the table accordingly to username, phoneNumber, email, skillets and hobby with indexing from database.

2.1. Here also include Update & Delete Method for freelancers informations whereas user will select freelancers from the table and it will display that particular freelancer's information with an option to edit this person. Once click on update, user are able to update their information or delete this freelancer. Upon calling, it will connect to Node JS using @PUT & @DELETE method which then will be used by Express to run SQL script to update the table based on which request are being triggered.

    Next is the Add Screen whereas user are able to add freelancers informations into the database. In this screen it will used @POST method to NodeJS which then will be used by Express to connect to MySQL database. Here, fields declaration that has been made from the screen has been used to follow directly with table's schematic to avoid any unnessary naming.


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
