CREATE USER 'Admin'@'localhost';
CREATE USER 'User'@'localhost';

-- Admin (All access)

GRANT ALL
ON .
TO 'Admin'@'localhost';

-- User( ie customer) access to select on
-- train , station , class , train_class , route , book , cancel , passenger
-- not allowed to see other users / their personal details
GRANT SELECT
ON train
TO 'User'@'localhost';

GRANT SELECT
ON station
TO 'User'@'localhost';

GRANT SELECT
ON class
TO 'User'@'localhost';

GRANT SELECT
ON train_class
TO 'User'@'localhost';

GRANT SELECT
ON route
TO 'User'@'localhost';

GRANT SELECT
ON book
TO 'User'@'localhost';

GRANT SELECT
ON cancel
TO 'User'@'localhost';

GRANT SELECT
ON passenger
TO 'User'@'localhost';