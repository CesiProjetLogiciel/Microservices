SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [BillingAddress]
SET [BillingAddress].[zipcode] = @Zipcode,
    [BillingAddress].[city] = @City,
    [BillingAddress].[address] = @Address,
    [BillingAddress].[state] = @State,
    [BillingAddress].[additionnalInfo] = @AdditionnalInfo,
    [BillingAddress].[lastname] = @Lastname,
    [BillingAddress].[firstname] = @Firstname,
    [BillingAddress].[phonenumber] = @PhoneNumber,
    [BillingAddress].[phonecountrycode] = @PhoneCountryCode,
    [BillingAddress].[id_Countries] = @idCountry,
    [BillingAddress].[id_Users] = @idUser
WHERE [BillingAddress].[id] = @addressId

COMMIT;

SELECT * FROM [BillingAddress] WHERE [BillingAddress].[id] = @addressId