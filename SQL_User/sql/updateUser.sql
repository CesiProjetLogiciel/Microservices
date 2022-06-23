SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [Users]
SET [Users].[lastname] = @Lastname,
    [Users].[firstname] = @Firstname,
    [Users].[pass] = @Pass,
    [Users].[isSuspended] = @isSuspended,
    [Users].[email] = @Email,
    [Users].[id_UserTypes] = (SELECT [id] FROM [UserTypes] WHERE [UserTypes].[type] = @Type)
WHERE [Users].[id] = @userId
OR [Users].[email] = @userEmail;

COMMIT;