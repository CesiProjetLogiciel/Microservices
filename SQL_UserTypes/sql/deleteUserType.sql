SET XACT_ABORT ON;
BEGIN TRANSACTION;

DELETE FROM [UserTypes]
WHERE [UserTypes].[id] = @userTypeId

COMMIT;