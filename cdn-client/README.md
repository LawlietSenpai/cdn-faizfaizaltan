# Angular CRUD application example with Web API using Node JS with MySQL

## How to Run as localhost
1. Run `npm install`.
2. Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`. The app will automatically reload if you change any of the source files.

## Explanation on this development projects.
1. This web implementation only contains the simple CRUD applications as stated plus I didn't have enough time with the working time. Hope this can meet your expections on the assesment task. This web-project is using Angular JS with NodeJS as REST API and Express for tools connecting to MySQL database. All are run from local environment. As for database connectivity, will be explain in the README.md in node-js-server application.

2. First, lets start with the homepage which can be accessed by `http://localhost:8081/` OR `http://localhost:8081/freelancers`. This screen HTML source code was programmed in the freelancer-list.component.html as for the front-end. This screen containing tabulation of list of freelancers information from MySQL database. When this page reloads, it will use @GET method to NodeJS and using Express to connecting to MySQL database. As for the tabulation, I'm using looping of information into the table accordingly to username, phoneNumber, email, skillets and hobby with indexing from database.

2.1. Here also include Update & Delete Method for freelancers informations whereas user will select freelancers from the table and it will display that particular freelancer's information with an option to edit this person. Once click on update, user are able to update their information or delete this freelancer. Upon calling, it will connect to Node JS using @PUT & @DELETE method which then will be used by Express to run SQL script to update the table based on which request are being triggered.


3. Next is the Add Screen whereas user are able to add freelancers informations into the database. In this screen it will used @POST method to NodeJS which then will be used by Express to connect to MySQL database. Here, fields declaration that has been made from the screen has been used to follow directly with table's schematic to avoid any unnessary naming. 
