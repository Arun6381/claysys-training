--creating a database 
CREATE DATABASE claysystraining;
--creating a table 
CREATE table signup (
         first_name varchar(50)
		 ,last_name varchar(50)
		 ,date_of_brith varchar(20)
		 ,gender varchar(10)
		 ,phone_number varchar(15)
		 ,email varchar(50)
		 ,username varchar(50)
		 ,password varchar(50)
		 );
--inserting a values to the table 
INSERT INTO signup  
VALUES
('john', 'John Doe', '1999-02-12', 'male', '21346578091', 'john@john.com', 'johnJohn', '1qaz2wsx3ed'),
('jane', 'Jane Smith', '1998-05-23', 'female', '31246578092', 'jane@1smith.com', 'janeJane', '4rfv5tgb6yhn'),
('alice', 'Alice Brown', '2000-09-15', 'female', '41546578093', 'alice@1brown.com', 'aliceAlice', '7ujm8ik9olp'),
('bob', 'Bob Johnson', '1995-11-30', 'male', '51646578094', 'bob@1johnson.com', 'bobBob', '0pl9okm8ijn'),
('emma', 'Emma Davis', '2001-03-27', 'female', '61746578095', 'emma@davis.com', 'emmaEmma', '3edc4rfv5tgb');
--display this the table
SELECT * FROM signup;
--update the value of table 
UPDATE signup
SET first_name='sam' 
WHERE last_name='Jane Smith';

UPDATE signup
SET first_name='tom' 
WHERE last_name='John doe';
--display the changes
SELECT * FROM signup;
--delete the colu in the table
DELETE FROM signup WHERE first_name='sam';
--display the changes
SELECT * FROM signup;