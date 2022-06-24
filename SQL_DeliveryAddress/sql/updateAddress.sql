SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [DeliveryAddress]
SET [DeliveryAddress].[zipcode] = @Zipcode,
    [DeliveryAddress].[city] = @City,
    [DeliveryAddress].[address] = @Address,
    [DeliveryAddress].[state] = @State,
    [DeliveryAddress].[additionnalInfo] = @AdditionnalInfo,
    [DeliveryAddress].[lastname] = @Lastname,
    [DeliveryAddress].[firstname] = @Firstname,
    [DeliveryAddress].[phonenumber] = @PhoneNumber,
    [DeliveryAddress].[phonecountrycode] = @PhoneCountryCode,
    [DeliveryAddress].[id_Countries] = @idCountry,
    [DeliveryAddress].[id_Users] = @idUser
WHERE [DeliveryAddress].[id] = @addressId

COMMIT;

SELECT * FROM [DeliveryAddress] WHERE [DeliveryAddress].[id] = @addressId