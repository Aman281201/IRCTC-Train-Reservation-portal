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
