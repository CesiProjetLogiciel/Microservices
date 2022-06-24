SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [Countries]
SET [Countries].[phonecountrycode] = @PhoneCountryCode,
    [Countries].[name] = @Name
WHERE [Countries].[id] = @countryId

COMMIT;

SELECT * FROM [Countries] WHERE [Countries].[id] = @countryId