SET XACT_ABORT ON;
BEGIN TRANSACTION;
INSERT INTO [dbo].[Countries]
([phonecountrycode], [name])
VALUES
(@PhoneCountryCode, @Name);
COMMIT;

SELECT * FROM [Countries] WHERE [Countries].[name] = @Name