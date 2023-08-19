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
