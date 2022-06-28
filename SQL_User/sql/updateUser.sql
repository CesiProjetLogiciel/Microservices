SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [Users]
SET [Users].[lastname] = COALESCE(@Lastname, [Users].[lastname]),
    [Users].[firstname] = COALESCE(@Firstname, [Users].[firstname]),
    [Users].[pass] = COALESCE(@Pass, [Users].[pass]),
    [Users].[isSuspended] = COALESCE(@isSuspended, [Users].[isSuspended]),
    [Users].[email] = COALESCE(@Email, [Users].[email]),
    [Users].[id_UserTypes] = COALESCE((SELECT [UserTypes].[id] FROM [UserTypes] WHERE [UserTypes].[type] = @Type), [Users].[id_UserTypes])
WHERE [Users].[id] = @userId
   OR [Users].[email] = @userEmail;

COMMIT;