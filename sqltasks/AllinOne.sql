
CREATE PROCEDURE singlestoredproced
(
    @email VARCHAR(50) = NULL,
    @username VARCHAR(50) = NULL,
    @Entertype NVARCHAR(20) = ''
)
AS
BEGIN
    -- insert operation
    IF @Entertype = 'Insert'
    BEGIN
        INSERT INTO login(email, username)
        VALUES (@email, @username)
    END
    
    -- select operation
    IF @Entertype = 'Select'
    BEGIN
        SELECT * FROM login
    END
    
    -- update operation
    IF @Entertype = 'Update'
    BEGIN
        UPDATE login
        SET username = @username
        WHERE email = @email;
    END
    
    -- delete operation
    IF @Entertype = 'Delete'
    BEGIN
        DELETE FROM login
        WHERE email = @email;
    END
END



EXEC singlestoredproced 
    @email = 'sam@example.com', 
    @username = 'sam', 
    @Entertype = 'Insert';

EXEC singlestoredproced 
    @Entertype = 'Select';


EXEC singlestoredproced 
    @email = 'bala@example.com', 
    @username = 'bala', 
    @Entertype = 'Update';

EXEC singlestoredproced 
    @email = 'sam@example.com', 
    @Entertype = 'Delete';
