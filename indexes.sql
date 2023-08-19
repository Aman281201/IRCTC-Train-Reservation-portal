-- indexes
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