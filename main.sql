CREATE  database railwayDatabase;
DROP DATABASE railwayDatabase;
show databases;

USE railwayDatabase;

show tables;

CREATE TABLE User(
UserName VARCHAR(20) PRIMARY KEY not null,
pass VARCHAR(20) not null,
age INT NOT null,
firstname varchar(20) NOT null ,
middlename VARCHAR(20),
lastname VARCHAR(20),
DOB date NOT NULL,
AddressLine VARCHAR(50) NOT null,
city VARCHAR(30) NOT null,
State VARCHAR(30) NOT null,
Pincode VARCHAR(10) NOT null,
Sex VARCHAR(10) NOT null,
PrefferedLanguage VARCHAR(20),
Nationality varchar(20) NOT null,
PhoneNumber varchar(10) NOT null,
CHECK(age>=18)
);

CREATE TABLE Train(
TrainID int PRIMARY KEY not null,
TrainName VARCHAR(50) not null
);

CREATE TABLE Ticket(
TicketID int PRIMARY KEY not null,
Amount INT not null,
SeatNo VARCHAR(20) ,
TicketStatus varchar(10),
TransactionID VARCHAR(20),
startStation VARCHAR(20),
endStation VARCHAR(20)
);

CREATE TABLE Class(
ClassCode VARCHAR(10) PRIMARY KEY not null
);

CREATE TABLE Station(
StationID varchar(20) PRIMARY KEY not null,
StationName VARCHAR(50) not null
);

CREATE TABLE Buy(
UserName VARCHAR(20),
TicketID int,
foreign key (UserName) references User(UserName),
foreign key (TicketID) references Ticket(TicketID)
);

CREATE TABLE Cancel(
UserName VARCHAR(20),
TicketID int,
foreign key (UserName) references User(UserName),
foreign key (TicketID) references Ticket(TicketID)
);

CREATE TABLE Train_class(
TrainID int,
TrainName VARCHAR(50),
ClassCode VARCHAR(10),
NoOfseats int not null,
foreign key (TrainID) references Train(TrainID),
foreign key (ClassCode) references Class(ClassCode)
);

CREATE TABLE Passenger(
PassengerAge int not null,
PassengerName VARCHAR(30) not null,
PassengerSex VARCHAR(10) not null
);

CREATE TABLE Book(
TrainID int not null,
TicketID int PRIMARY KEY not null,
ClassCode varchar(20) not null,
PassengerAge int not null,
PassengerName VARCHAR(30) not null,
PassengerSex VARCHAR(10) not null,
foreign key (TicketID) references Ticket(TicketID),
foreign key (TrainID) references Train(TrainID),
foreign key (ClassCode) references Class(ClassCode),
startStation VARCHAR(20),
endStation VARCHAR(20)
);

CREATE TABLE Administrator(
EmpId int primary key,
firstname varchar(20) NOT null ,
middlename VARCHAR(20),
lastname VARCHAR(20) Not null,
accessCode varchar(20) not null unique
);
-- create view passengerTimes as
-- select PassengerName, PassengerSex, PassengerAge
-- from Book
-- join Route
-- on Route.TrainID = Book.TrainID;
-- select * from PassengerTimes;
-- create view routecost as
-- select startStation, endStation, fare
-- from Route
-- join Book
-- on Book.TrainID = Route.TrainID;
-- select * from routeCost;

CREATE TABLE Route(
TrainID int not null,
startStation varchar(20) not null,
endStation varchar(20) not null,
SeatsLeft int not null default 100,
ClassCode varchar(10) not null, 
foreign key (TrainID) references Train(TrainID),
foreign key (startStation) references Station(StationID),
foreign key (endStation) references Station(StationID),
foreign key (ClassCode) references Class(ClassCode),
DepartureTime time not null,
ArrivalTime time not null,
DateOfDeparture date not null,
fare int not null
);

INSERT INTO Train VALUES(1, 'Rajdhani Exp');
INSERT INTO Train VALUES(2, 'Shatabdi Exp');
INSERT INTO Train VALUES(3, 'Maharaja Exp');
INSERT INTO Train VALUES(4, 'Gareeb Rath Exp');
INSERT INTO Train VALUES(2002, 'Gujarat Exp');
INSERT INTO Train VALUES(5, 'Delhi Exp');
INSERT INTO Train VALUES(6, 'Shramjivi Exp');
INSERT INTO Train VALUES(7, 'Las Vegas Casino Exp');
INSERT INTO Train VALUES(8, 'Friday Exp');
INSERT INTO Train VALUES(9, 'Goa Exp');

INSERT INTO Ticket VALUES(1,0,'','','','','');
INSERT INTO Ticket VALUES(2,0,'','','','','');
INSERT INTO Ticket VALUES(3,0,'','','','','');
INSERT INTO Ticket VALUES(4,0,'','','','','');
INSERT INTO Ticket VALUES(5,0,'','','','','');
INSERT INTO Ticket VALUES(6,0,'','','','','');
INSERT INTO Ticket VALUES(7,0,'','','','','');
INSERT INTO Ticket VALUES(8,0,'','','','','');
INSERT INTO Ticket VALUES(9,0,'','','','','');
INSERT INTO Ticket VALUES(10,0,'','','','','');

INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (20,'abhinn','male');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (24,'neha','female');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (132,'tushar','male');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (23,'mudit','male');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (21,'makkar','male');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (44,'hunar','female');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (85,'dhruv','male');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (21,'tanish','male');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (26,'kush','male');
INSERT INTO  Passenger(PassengerAge,PassengerName,PassengerSex) VALUES (18,'ut','male');

INSERT INTO Station (stationID, stationName) VALUES ('0', 'Delhi');
INSERT INTO Station (stationID, stationName) VALUES ('1', 'Mumbai');
INSERT INTO Station (stationID, stationName) VALUES ('2', 'Chennai');
INSERT INTO Station (stationID, stationName) VALUES ('3', 'Kolkata');
INSERT INTO Station (stationID, stationName) VALUES ('4', 'Hyderabad');
INSERT INTO Station (stationID, stationName) VALUES ('5', 'Ahmedabad');
INSERT INTO Station (stationID, stationName) VALUES ('6', 'Bangalore');
INSERT INTO Station (stationID, stationName) VALUES ('7', 'Bhopal');
INSERT INTO Station (stationID, stationName) VALUES ('8', 'Lucknow');
INSERT INTO Station (stationID, stationName) VALUES ('9', 'Jaipur');

INSERT INTO Class VALUES('UR');
INSERT INTO Class VALUES('4AC');
INSERT INTO Class VALUES('SL');
INSERT INTO Class VALUES('3AC');
INSERT INTO Class VALUES('2AC');
INSERT INTO Class VALUES('1AC');
INSERT INTO Class VALUES('1A');
INSERT INTO Class VALUES('CC');
INSERT INTO Class VALUES('2S');
INSERT INTO Class VALUES('3S');
INSERT INTO Class VALUES('4S');

INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('arsh69','dhsfkhdsk',20,'Arsh',NULL,'Gupta','2021-02-22','IIITD Hostel','Delhi','Delhi','110034','Male','English','American','8822123234');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('abhinn62','djfgdjgfjd',20,'Abhinn',NULL,'Yadav','2021-01-22','Rishi Nagar','Delhi','Delhi','110044','Male','English','Indian','9821166234');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('nks','dfjdjhfei',20,'Neelabh','Kumar','Srivastava','2021-01-04','janakpuri','Delhi','Delhi','110057','Male','English','Indian','8022123124');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('sabby22','foeuforeu',20,'Sadhvi',NULL,'Bhand','2021-05-14','IIITD Hostel','Delhi','Delhi','110084','Female','English','Indian','5542123240');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('racoonNoob','dfjhdkhgfeid',20,'Aishani',NULL,'Gupta','2021-05-31','IIITD Hostel','Delhi','Delhi','110074','Female','English','Indian','8822123234');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('Valkyrie','fdihfiedhfe',20,'Anand',NULL,'singh','2021-02-25','IIITD Hostel','Delhi','Delhi','110064','Male','English','Canadian','8822125434');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('Dracarys','eiyrieyrow',20,'Priyanshu',NULL,NULL,'2022-02-21','IIITD Hostel','Delhi','Delhi','110083','Male','English','Canadian','8552123234');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('ut_god','efigdifieyw',20,'Utkarsh',NULL,'Pal','2021-02-22','IIITD Hostel','Delhi','Delhi','110094','Male','English','African','8822133234');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('v21','fdihfkdhfie',20,'vaidik',NULL,'kumar','2021-04-22','IIITD Hostel','Delhi','Delhi','110564','Male','English','African','8852133234');
INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
VALUES ('t22','fkdhfkheie',20,'tushar',NULL,'Gupta','2021-02-22','IIITD Hostel','Delhi','Delhi','110034','Male','English','Indian','8822123234');

INSERT INTO Route VALUES(1,'0','1',2,'1AC',"02:00:00", "10:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'0','1',2,'2AC',"02:00:00", "10:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'0','1',2,'3AC',"02:00:00", "10:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'1','2',2,'1AC',"10:05:00", "13:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'1','2',2,'2AC',"10:05:00", "13:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'1','2',2,'3AC',"10:05:00", "13:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'2','3',2,'1AC',"13:00:00", "18:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'2','3',2,'2AC',"13:00:00", "18:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'2','3',2,'3AC',"13:00:00", "18:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'3','5',2,'1AC',"18:00:00", "23:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'3','5',2,'2AC',"18:00:00", "23:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'3','5',2,'3AC',"18:00:00", "23:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'5','4',2,'1AC',"23:00:00", "02:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'5','4',2,'2AC',"23:00:00", "02:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'5','4',2,'3AC',"23:00:00", "02:00:00", '2022-03-02', 1000);
INSERT INTO Route VALUES(1,'4','6',2,'1AC',"02:00:00", "10:00:00", '2022-03-03', 1000);
INSERT INTO Route VALUES(1,'4','6',2,'2AC',"02:00:00", "10:00:00", '2022-03-03', 1000);
INSERT INTO Route VALUES(1,'4','6',2,'3AC',"02:00:00", "10:00:00", '2022-03-03', 1000);
INSERT INTO Route VALUES(2,'2','8',2,'1AC',"10:00:00", "14:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'2','8',2,'2AC',"10:00:00", "14:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'2','8',2,'3AC',"10:00:00", "14:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'8','1',2,'1AC',"14:00:00", "18:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'8','1',2,'2AC',"14:00:00", "18:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'8','1',2,'3AC',"14:00:00", "18:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'1','3',2,'1AC',"18:00:00", "23:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'1','3',2,'2AC',"18:00:00", "23:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'1','3',2,'3AC',"18:00:00", "23:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'3','4',2,'1AC',"23:00:00", "04:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'3','4',2,'2AC',"23:00:00", "04:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'3','4',2,'3AC',"23:00:00", "04:00:00", '2022-03-04', 1000);
INSERT INTO Route VALUES(2,'4','6',2,'1AC',"04:00:00", "20:00:00", '2022-03-05', 1000);
INSERT INTO Route VALUES(2,'4','6',2,'2AC',"04:00:00", "20:00:00", '2022-03-05', 1000);
INSERT INTO Route VALUES(2,'4','6',2,'3AC',"04:00:00", "20:00:00", '2022-03-05', 1000);

INSERT INTO Buy VALUES('arsh69',1);
INSERT INTO Buy VALUES('abhinn62',2);
INSERT INTO Buy VALUES('nks',3);
INSERT INTO Buy VALUES('sabby22',4);
INSERT INTO Buy VALUES('racoonNoob',5);
INSERT INTO Buy VALUES('Valkyrie',6);
INSERT INTO Buy VALUES('Dracarys',7);
INSERT INTO Buy VALUES('ut_god',8);
INSERT INTO Buy VALUES('v21',9);
INSERT INTO Buy VALUES('t22',10);

INSERT INTO Cancel VALUES('ut_god',8);
INSERT INTO Cancel VALUES('v21',9);
INSERT INTO Cancel VALUES('t22',10);
INSERT INTO Cancel VALUES('sabby22',4);
INSERT INTO Cancel VALUES('nks',3);

INSERT INTO Train_class VALUES(1,'Rajdhani Exp','1AC',2);
INSERT INTO Train_class VALUES(1,'Rajdhani Exp','2AC',2);
INSERT INTO Train_class VALUES(1,'Rajdhani Exp','3AC',2);
INSERT INTO Train_class VALUES(1,'Rajdhani Exp','SL',2);
INSERT INTO Train_class VALUES(1,'Rajdhani Exp','CC',2);
INSERT INTO Train_class VALUES(2,'Shatabdi Exp','1AC',2);
INSERT INTO Train_class VALUES(2,'Shatabdi Exp','2AC',2);
INSERT INTO Train_class VALUES(2,'Shatabdi Exp','3AC',2);
INSERT INTO Train_class VALUES(2,'Shatabdi Exp','SL',2);
INSERT INTO Train_class VALUES(2,'Shatabdi Exp','CC',2);

INSERT INTO Book VALUES(1,1,'1AC',20,'Arsh','Male','Delhi','Mumbai');
INSERT INTO Book VALUES(1,2,'2AC',20,'Abhinn','Male','Delhi','Mumbai');
INSERT INTO Book VALUES(1,3,'3AC',20,'Neelabh','Male','Delhi','Mumbai');
INSERT INTO Book VALUES(1,4,'1AC',20,'Sadhvi','Female','Delhi','Mumbai');
INSERT INTO Book VALUES(1,5,'2AC',20,'Aishani','Female','Delhi','Mumbai');
INSERT INTO Book VALUES(1,6,'3AC',20,'Anand','Male','Delhi','Mumbai');
INSERT INTO Book VALUES(1,7,'SL',20,'Priyanshu','Male','Delhi','Mumbai');
INSERT INTO Book VALUES(1,8,'SL',20,'Utkarsh','Male','Delhi','Mumbai');
INSERT INTO Book VALUES(1,9,'CC',20,'Vaidik','Male','Delhi','Mumbai');
INSERT INTO Book VALUES(1,10,'CC',20,'Tushar','Male','Delhi','Mumbai');

INSERT INTO Administrator VALUES(1001, "Abhinn", "Kumar", "Yadav", "abhinn25");
INSERT INTO Administrator VALUES(1002, "Aman", "Kumar", "gupta", "aman27");
INSERT INTO Administrator VALUES(1003, "Arsh", "Kumar", "gupta", "arsh24");
INSERT INTO Administrator VALUES(1004, "priyanshu", "Kumar", "iiitd", "chapri5");
INSERT INTO Administrator VALUES(1005, "nelab", "Kumar", "shri", "nelabBath");
-- triggers
SET GLOBAL log_bin_trust_function_creators = 1;

DELIMITER $$
CREATE FUNCTION `formatName`(str varchar(255)) RETURNS varchar(255) 
BEGIN
  declare c int;
  declare x varchar(255);
  declare y varchar(255);
  declare z varchar(255);
  set x = UPPER( SUBSTRING( str, 1, 1));
  set y = SUBSTR( str, 2);
  set c = instr( y, ' ');
  while c > 0
    do
      set z = SUBSTR( y, 1, c);
      set x = CONCAT( x, z);
      set z = UPPER( SUBSTR( y, c+1, 1));
      set x = CONCAT( x, z);
      set y = SUBSTR( y, c+2);
      set c = INSTR( y, ' ');     
  end while;
  set x = CONCAT(x, y);
  return x;
END$$

DELIMITER $$
CREATE TRIGGER validateSeats
BEFORE INSERT 
ON Train_class
FOR EACH ROW
BEGIN
IF NEW.NoOfseats < 0
    THEN SET NEW.NoOfseats = 0;
    END IF;
END$$


CREATE TRIGGER formatName 
BEFORE INSERT ON User
FOR EACH ROW
SET NEW.firstname = capitalize(NEW.firstname), NEW.lastname = capitalize(NEW.lastname);

DELIMITER $$
CREATE TRIGGER updateStatus
AFTER INSERT
ON Book
FOR EACH ROW
BEGIN
UPDATE Ticket
SET Ticketstatus = 'Booked'
WHERE Ticket.TicketID  = New.TicketID;
END$$

-- views
create view validTrainView as 
select TrainID, classCode
from Route
where seatsLeft > 0;
drop view validTrainView;

create view ticketIDView as
select TrainID, PassengerName 
from Book
join Ticket
on Book.TicketID = Ticket.TicketID;

create view cancelled as
select PassengerName, PassengerAge, PassengerSex
from Book
where TicketID = 1000;

create view times as
select distinct TicketID, DepartureTime, ArrivalTime, DateOfDeparture
from Route
join Book
on Book.TrainID = Route.TrainID;

-- INDEXES
create index book_index
on Book(TicketID, TrainID, ClassCode);

create index buy_index
on Buy(UserName, TicketID);

create index cancel_index
on Cancel(Username, TicketID);

create index class_index
on Class(ClassCode);

create index route_index
on Route(TrainID, startStation, endStation, ClassCode);

create index station_index
on Station(StationID);

create index ticket_index
on Ticket(TicketID);

create index train_index
on Train(TrainID);

create index train_class_index
on Train_class(TrainID, ClassCode);

create index user_index
on User(UserName);

select * from Train;
select * from User;
-- DROP TABLE User;

-- DROP DATABASE railwayDatabase;
show tables;
SELECT * FROM Route;

-- Query-1(new user signup)
-- we will take input from the forntend and will ask the user to fill in these details
-- INSERT INTO User (UserName, password, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber)
INSERT INTO User VALUES ('arsh64','arsh2626',21,'Arsh',NULL,'Gupta','2021-02-22','IIITD Hostel','Delhi','Delhi','110034','Male','English','American','8822123134');
SELECT * FROM User;

-- Query-2(user login)
-- user will input the user name then we will check if it is present in database if present we will extract password
select UserName, pass from User 
	where (select count(UserName) from User
		where UserName = 'arsh64') = 1 and UserName = 'arsh64';

-- Query 3 (selecting the train which travel between the starting and destination of passenger)
select distinct TrainID from Route where
(startStation = '2'
or endStation = '3')
and DateOfDeparture = '2022-03-04'
group by TrainID, startStation, endStation;

-- select distinct TrainID from Route
-- where startStation = '2'
-- union all
-- select TrainID from Route 
-- where endStation = '3' 
-- and DateOfDeparture = '2022-03-04'
-- group by startStation, endStation;

-- Query-4 (buying ticket)
insert into Passenger values (20,'Priyanshu','male');
insert into Ticket values (1000,1200,'2AC/34','confirmed',111, '2', '3');
insert into Book values (2, 1000, '2AC', 20,'Priyanshu','male','2','3');
insert into Buy Values ('arsh64',1000);

-- Query 5 (Updating the seats of the train after a user books ticket)
-- creating view
-- create view validRouteStart3 as 
-- select DepartureTime
-- from Route
-- where startStation = '2' and classCode = '2AC' and TrainID = 2;

-- create view validRouteEnd3 as
-- select DepartureTime
-- from Route
-- where endStation = '3' and classCode = '2AC'  and TrainID = 2;

-- create view validRouteDateStart as
-- select DateOfDeparture
-- from Route
-- where startStation = '2' and classCode = '2AC'  and TrainID = 2;

-- create view validRouteDateEnd as 
-- select DateOfDeparture
-- from Route
-- where endStation = '3' and classCode = '2AC'  and TrainID = 2;

-- main query
update Route set SeatsLeft = SeatsLeft -1  where 
(SeatsLeft >0 and 
(DepartureTime >= 
	(select Dt from 
		(select DepartureTime as Dt from Route where 
			startStation = '2' and classCode = '2AC' and TrainID = 2) as d) and 
DepartureTime <= 
	(select Dt from 
		(select DepartureTime as Dt from Route where 
			endStation = '3' and classCode = '2AC'  and TrainID = 2) as d)) and
(DateOfDeparture >= 
	(select Dod from 
		(select DateOfDeparture as Dod from Route where 
			startStation = '2' and classCode = '2AC'  and TrainID = 2) as dod) and 
DateOfDeparture <= 
	(select Dod from 
		(select DateOfDeparture as Dod from Route where 
			endStation = '3' and classCode = '2AC'  and TrainID = 2) as dod)) and 
ClassCode = '2AC' and TrainID = 2);

Select * from Route;


-- Query 6 (Available class)
-- the user has already selected the train so we want to make query to show available classes
select distinct classCode from validTrainView where TrainID = 1;

-- Query 7 (updating seats left after cancellation of ticket)
-- ticket ID to be cancelled would be provided by the user
-- WITH st as 
--     (select startStation, endStation, ClassCode from Ticket where TicketID = 1000)
--     , tid as (select TrainID from Book where TicketID = 1000)
update Route set SeatsLeft = SeatsLeft + 1  where 
(SeatsLeft >0 and 
(DepartureTime >= 
	(select Dt from 
		(select DepartureTime as Dt from Route where 
			startStation = (select startStation from Ticket where TicketID = 1000) and classCode =  (select ClassCode from Book where TicketID = 1000) and TrainID =(select TrainID from Book where TicketID = 1000)) as d) and 
DepartureTime <= 
	(select Dt from 
		(select DepartureTime as Dt from Route where 
			endStation = (select endstation from Ticket where TicketID = 1000) and classCode = (select ClassCode from Book where TicketID = 1000) and TrainID = (select TrainID from Book where TicketID = 1000)) as d)) and
(DateOfDeparture >= 
	(select Dod from 
		(select DateOfDeparture as Dod from Route where 
			startStation = (select startStation from Ticket where TicketID = 1000) and classCode = (select ClassCode from Book where TicketID = 1000)  and TrainID =(select TrainID from Book where TicketID = 1000)) as dod) and 
DateOfDeparture <= 
	(select Dod from 
		(select DateOfDeparture as Dod from Route where 
			endStation = (select endstation from Ticket where TicketID = 1000)  and classCode = (select ClassCode from Book where TicketID = 1000)  and TrainID = (select TrainID from Book where TicketID = 1000)) as dod)) and 
ClassCode = (select ClassCode from Book where TicketID = 1000) and TrainID =(select TrainID from Book where TicketID = 1000));
select * from Route;

-- Query 7.1 (updating ticket status and cancel table after user cancels the ticket) 
-- trigger using before updation
update Ticket set TicketStatus = 'cancelled' where TicketID = 1000;
select * from Ticket;
select * from Cancel;
select * from ticketIDView;
-- Query 7.2 (deleting passenger after cancelation of seat)
drop view if exists cancelled;
create view cancelled as
select PassengerName, PassengerAge, PassengerSex
from Book
where TicketID = 1000;
select * from cancelled;

drop view if exists ticketIDView;
create view ticketIDView as
select TrainID, PassengerName 
from Book
join Ticket
on Book.TicketID = Ticket.TicketID where (Ticket.TicketStatus <> 'cancelled');
select * from ticketIDView;

select * from Book;
select * from Passenger;
select * from Ticket;
Select * from cancel;
Select * from Route;

drop table User;

-- Query 8 (show Tickets)
-- creatign view for tickets bought by 'arsh64'
-- create view ticketsBoughtView as
-- select TicketID
-- from Buy
-- where UserName = 'arsh64';
-- main query
select Book.PassengerName, Ticket.TicketID, Ticket.TicketStatus
FROM Book
INNER JOIN Ticket ON Book.TicketID = Ticket.TicketID where 
Ticket.TicketID in (select TicketID from Buy where UserName = 'arsh64');
	-- (select TicketID from Buy where UserName = 'arsh64');

-- Query 9 (Cost calculation)
Select  sum(Route.Fare) as sum from Route where
(SeatsLeft >0 and 
(DepartureTime >= 
    (select DepartureTime from 
        (select * from validRouteStart3) as d1) and 
DepartureTime <= 
    (select DepartureTime from 
        (select * from validRouteEnd3) as d1)) and
(DateOfDeparture >= 
    (select DateOfDeparture from 
        (select * from validRouteDateStart) as dod1) and 
DateOfDeparture <= 
    (select DateOfDeparture from 
        (select * from validRouteDateEnd) as dod1)) and 
ClassCode = '2AC' and TrainID = 2)
Group by Route.TrainID;

-- Query 10 (Displaying passengers for a given train)
-- Select PassengerName, PassengerAge, PassengerSex, ClassCode from Book
-- Where Book.TrainID = 2;
select PassengerName from ticketIDView where TrainID = 1;

-- Query 11 (sorting and printing the stations alphabetically)(from admins view)
select stationID, stationName,
rank() over (order by stationName asc) as ranked from Station;

-- query 12 (chronologically printing all the trains departure on a specific day between any 2 stations)
select distinct TrainID, startStation, endStation, DepartureTime, ArrivalTime,
dense_rank() over (order by DepartureTime asc) as chronologicalDeparture from Route 
where DateOfDeparture = '2022-03-04';
-- Query 12 (sorting passengers on the basis of age)(from admins view)
-- select PassengerName, PassengerSex, PassengerAge,
-- rank() over (order by PassengerAge asc) as ranked from Passenger;