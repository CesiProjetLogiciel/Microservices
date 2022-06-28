SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [Countries]
SET [Countries].[phonecountrycode] = COALESCE(@PhoneCountryCode, [Countries].[phonecountrycode]),
    [Countries].[name] = COALESCE(@Name, [Countries].[name])
WHERE [Countries].[id] = @countryId

COMMIT;

SELECT * FROM [Countries] WHERE [Countries].[id] = @countryId