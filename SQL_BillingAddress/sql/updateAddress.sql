SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [BillingAddress]
SET [BillingAddress].[zipcode] = COALESCE(@Zipcode, [BillingAddress].[zipcode]),
    [BillingAddress].[city] = COALESCE(@City, [BillingAddress].[city]),
    [BillingAddress].[address] = COALESCE(@Address, [BillingAddress].[address]),
    [BillingAddress].[state] = COALESCE(@State, [BillingAddress].[state]),
    [BillingAddress].[additionnalInfo] = COALESCE(@AdditionnalInfo, [BillingAddress].[additionnalInfo]),
    [BillingAddress].[lastname] = COALESCE(@Lastname, [BillingAddress].[lastname]),
    [BillingAddress].[firstname] = COALESCE(@Firstname, [BillingAddress].[firstname]),
    [BillingAddress].[phonenumber] = COALESCE(@PhoneNumber, [BillingAddress].[phonenumber]),
    [BillingAddress].[phonecountrycode] = COALESCE(@PhoneCountryCode, [BillingAddress].[phonecountrycode]),
    [BillingAddress].[id_Countries] = COALESCE(@idCountry, [BillingAddress].[id_Countries]),
    [BillingAddress].[id_Users] = COALESCE(@idUser, [BillingAddress].[id_Users])
WHERE [BillingAddress].[id] = @addressId

COMMIT;

SELECT * FROM [BillingAddress] WHERE [BillingAddress].[id] = @addressId