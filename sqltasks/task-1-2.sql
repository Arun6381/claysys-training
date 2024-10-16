--creating a database 
USE claysystraining;
--creating a table 
CREATE table login (
        email varchar(50)
		 ,username varchar(50)
		 );
--inserting a values to the table 
INSERT INTO login  
VALUES
( 'john@john.com',  '1qaz2wsx3ed'),
( 'jane@smith.com',  '4rfv5tgb6yhn'),
( 'alice@brown.com', '7ujm8ik9olp'),
('bob@johnson.com', '0pl9okm8ijn'),
( 'emma@davis.com',  '3edc4rfv5tgb');
--display this the table
SELECT * FROM login;
--update the value of table 
UPDATE login
SET email='jane@smith1.com' 
WHERE email='jane@smith.com';


--display the changes
SELECT * FROM login;
--delete the colu in the table
DELETE FROM login WHERE  email='jane@smith1.com' ;
--display the changes
SELECT * FROM login;