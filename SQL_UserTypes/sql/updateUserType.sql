SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [UserTypes]
SET [UserTypes].[type] = COALESCE(@Type, [UserTypes].[type])
WHERE [UserTypes].[id] = @userTypeId

COMMIT;

SELECT * FROM [UserTypes] WHERE [UserTypes].[id] = @userTypeId