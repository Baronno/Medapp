# Medapp 
The purpose is of the project is going to help the doctor to manage the patient information. It can show, edit, add, search and delete the information of the patients. And it can edit the doctor's information as well.
## Get started
to run the application, by 
```npm start```
### Prerequest and install
we need the environmet to do our project. So we choose the mean full stack application which includes the Mongoose, Express, Angular and node.js. 

Angular

```npm install -g @angular/cli```

Mongodb

```npm install mongoose```

express

 ```npm install express --save```

node.js

```npm install npm@latest -g```

## The components we used:
 add-patient --
 home
 loginform
 navigate
 patient-detail
 patients
 register
 
 These are components we are used in our project.  We separate the project into diffferent components so this is better to manage.

## How to use the app
For the first time to run the app.

Firstly, open the mongodb and run the command mongod to start to mongod server.

 ```C:\Program Files\MongoDB\Server\4.0\bin>mongod ```
 Secondly, go tothe application src file and find the addFirst.js which store the doctor information. And then run the following command
 
  ```node addFirstDB.js ```
 Thirdly, run the following command to connect to the database
 
  ```node server.js ```
At the end, run the following to start the application

 ```npm start ```
## database use
This project uses the mongodb which is convenient to use. In order to manage the data for the project, we can use the fowllowing command to operate.So the use of database is pretty important. First thing is go the mongod file.

start the mongod 
```mongo.exe```

show the data
```show dbs```

create table
 ```db.createCollection()  ```
 
 insert data
  ```db.inventory.insertOne（）```
 delete data(This command will help to delete one data that you want )
 ```db.collection.deleteOne()```
 update data(for one )
 db.inventory.updateOne
## Running the test
We are going to do the unit test by the Jazmine and Karma which provided by the Angular

 ```npm test ```
 ## Deployment
 This application can be deployed on the AWS platform.
 
 ## Built with
 Angular2 -
 
 the front-end web framework used
 
 mongodb -
 
 the datebase used
 
 exprees - 
 
 dependency and the backend
 ## Authors
1 renhui zhou- front-end

 2           
  3          
   4         
 
