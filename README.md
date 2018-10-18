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

   ## Architecture
 Angular2
 
 the front-end web framework used. We use the angular to generate our front-end.
 
 mongodb
 
 The datebase used. the database has been used to store the data of our project. 
 
 express,node.js
 
 It's for dependency and the backend. By using express and node.js, we can use the express to excute the http operation such as get, post, use and update. It allows us to receive the input from the front-end and give the dealed infromation to the front-end. On the other hand, it also connected to the database.
 
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
 
## The components we used:

app 
This component is the main component, all of the other components are bulit based on the app component.

 add-patient
 
 This component is for add the patient information.
 
 home
 It's home page which shows Medapp image.
 
 loginform
 
 This component stores the dashborad which links to the login form
 navigate
 
 patient-detail
 This component will show the patient detial.
 
 patients
 This component will show the patients page, and the patient detial is the sub-component of patients. 
 
 register
 This component will show the register page which inculdes the doctor's register page.
 
 navigate
 This component will show the doctor's information which the user can edit.
 
 These are components we are used in our project.  We separate the project into diffferent components so this is better to manage.
 
## The service we used:

Patient.service

Doctor.service

In this project, these two services were created to opeate the operations between different components, within this, the structure of the app is more clear. The component is for dispaly while the service is responsible for receive and send.In other words, any components can use the services as we want which clearly reduce the code and improve the effiency.


## database use

This project uses the mongodb which is convenient to use. In order to manage the data for the project, we can use the fowllowing command to operate.So the use of database is pretty important. First thing is go the mongod file.

start the mongod 

```mongo.exe```

show the data

```show dbs```
```db.collectionname.find()```

create table

 ```db.createCollection()  ``` 
 
 data upadate and insert
 
 ```db.data.update() ``` 
 
## Express and node.js

The express should run in the node environment. We use the express to built the server in the project, which consitute of many functions, to do the operations

addDoctor.js

It allows user to add the doctor

addFirstDB.js

this is the database where we store the data

addPatient.js

It allows user to add the patients

app.js

It will deal with the data from the frontend. For example, it will get the patient information and send back to show on the page.

connect.js

It is used to connect the database

doctor.js

It identify the doctor type which means the doctor's infromation type(string or number etc).

exit.js

It allows user to exit

patient.js

It identify the patient type which means the patient's infromation type(string or number etc).

query.js

It is for displaying the patient's information one by one, which means it will get the data from database and to display it in the page.

server.js

start the server and use it to listen the port

testdb.js

for the test

updatePatient.js

It is for updating the patients data.

All of thos these javascript play an important role in the server. It allows the front end to get, post, update the input which did by the user. Furthermore, these files have different functions to deals with the data.


 
 ## Deployment
 This application can be deployed on the AWS platform. 
 
 https://aws.amazon.com/free
 
 ## Authors
1 renhui zhou
       
 
