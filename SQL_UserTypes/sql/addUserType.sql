SET XACT_ABORT ON;
BEGIN TRANSACTION;
INSERT INTO [dbo].[UserTypes]
([type])
VALUES
(@Type);
COMMIT;

SELECT * FROM [UserTypes] WHERE [UserTypes].[type] = @Type