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
 add-patient
 home
 loginform
 navigate
 patient-detail
 patients
 register
 
 These are components we are used in our project.  We separate the project into diffferent components so this is better to manage.
## The service we used:
Patient.service
Doctor.service

In this project, these two services were created to opeate the operations between different components, within this, the structure of the app is more clear. The component is for dispaly while the service is responsible for receive and send.In other words, any components can use the services as we want which clearly reduce the code and improve the effiency.
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
```db.collectionname.find()```

create table
 ```db.createCollection()  ``` ```
 
 data upadate and insert
 ```db.data.update() ``` ```
 

   ## Architecture
 Angular2
 
 the front-end web framework used. We use the angular to generate our front-end.
 
 mongodb
 
 the datebase used. the databaser has been used to store the data of our project.
 
 express,node.js
 
 dependency and the backend. By using express and node.js, we can use the express to excute the http operation such as get, post, use and update. It allows us to receive the input from the front-end and give the dealed infromation to the front-end. On the other hand, it also connected to the database.
 
 ## Deployment
 This application can be deployed on the AWS platform. 
 
 https://aws.amazon.com/free
 ## Authors
1 renhui zhou- front-end

 2           
  3          
   4         
 
