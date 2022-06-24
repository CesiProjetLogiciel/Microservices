SET XACT_ABORT ON;
BEGIN TRANSACTION;

DELETE FROM [Users]
WHERE [Users].[id] = @userId
OR [Users].[email] = @userEmail;

COMMIT;