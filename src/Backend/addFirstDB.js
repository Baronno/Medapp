var addPatient = require('./addPatient');
var addDoctor = require('./addDoctor');
var Exit = require('./exit');

addPatient(215, 101, 'Alex Johnson', 21,'422156874', 'Healthy');
addPatient(216, 102, 'Annie Jones', 19, '422455120', 'Under antibiotics');
addPatient(217, 101, 'Susan Williams', 34, '428744661', '3 months pregnant');
addPatient(218, 101, 'Kate Brown' , 54 , '423545852', 'Needs to visit neurologist');
addPatient(219, 102, 'Amanda Wilson' , 37, '422789632', 'Uses pacemaker');
addPatient(220, 103, 'Diana Taylor', 28, '421746611', 'Healthy');
addPatient(221, 103, 'Melanie White', 41 , '428767620', 'Needs a hip replacement');
addPatient(222, 101, 'Thomas Martin', 65 , '425452526', 'Smokes too much');
addPatient(223, 102, 'James Anderson' , 34 , '422885864', 'Healthy');
addPatient(224, 101, 'Alex Thompson', 21 , '422115546', 'Under antibiotics');
addPatient(225, 104, 'Bryan Nguyen' , 34 , '477552119', 'Healthy');
addPatient(226, 104, 'Janis Joplin' , 34 , '423658410', 'Needs to stop smoking');

addDoctor(101, 'a', 'a', 'Fernando Huerta', '488456841', 'Cardiology');
addDoctor(102, 'b', 'b', 'Alexandre Correia', '422458454', 'Neurology');
addDoctor(103, 'c', 'c', 'Renhui Zhou', '466855423', 'Radiology');
addDoctor(104, 'd', 'd', 'Suhao Chen', '466884413', 'Pediatry');

Exit();
