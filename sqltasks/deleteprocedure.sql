CREATE PROCEDURE deleteproc
 @email VARCHAR(50)
 AS
BEGIN

 DELETE FROM login
  WHERE email=@email;
END;

EXEC deleteproc 'qaz12wx@wsx.xsw';
SELECT * FROM login;