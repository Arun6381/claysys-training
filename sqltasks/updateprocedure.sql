CREATE PROCEDURE updateemp_login
  @email VARCHAR(50)
  ,@username VARCHAR(15)
AS
BEGIN

 UPDATE login
 SET
  username=@username
  WHERE email=@email;

  
END;

EXEC updateemp_login @username='Arun', @email='arun@gmaail.com';
select * FROm login