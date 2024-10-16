CREATE PROCEDURE getemp_login
  @email VARCHAR(50)
  ,@username VARCHAR(15)
AS
BEGIN
  SELECT * FROM login
  INSERT INTO login(email,username)  
  VALUES(
  @email
  ,@username 
  )
END

EXEC getemp_login'qaz12wx@wsx.xsw','1qaz2wsx3edc';
EXEC getemp_login 'john.doe@example.com','John Doe';
EXEC getemp_login 'jane.smith@example.com','JaneSmith';
EXEC getemp_login  'mark.jones@example.com','MarkJones';


  SELECT * FROM login

  --update data using stored procedure

 

