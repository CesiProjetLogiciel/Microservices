SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [UserTypes]
SET [UserTypes].[type] = @Type
WHERE [UserTypes].[id] = @userTypeId

COMMIT;

SELECT * FROM [UserTypes] WHERE [UserTypes].[id] = @userTypeId