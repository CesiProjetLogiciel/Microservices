SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [DeliveryAddress]
SET [DeliveryAddress].[zipcode] = COALESCE(@Zipcode, [DeliveryAddress].[zipcode]),
    [DeliveryAddress].[city] = COALESCE(@City, [DeliveryAddress].[city]),
    [DeliveryAddress].[address] = COALESCE(@Address, [DeliveryAddress].[address]),
    [DeliveryAddress].[state] = COALESCE(@State, [DeliveryAddress].[state]),
    [DeliveryAddress].[additionnalInfo] = COALESCE(@AdditionnalInfo, [DeliveryAddress].[additionnalInfo]),
    [DeliveryAddress].[lastname] = COALESCE(@Lastname, [DeliveryAddress].[lastname]),
    [DeliveryAddress].[firstname] = COALESCE(@Firstname, [DeliveryAddress].[firstname]),
    [DeliveryAddress].[phonenumber] = COALESCE(@PhoneNumber, [DeliveryAddress].[phonenumber]),
    [DeliveryAddress].[phonecountrycode] = COALESCE(@PhoneCountryCode, [DeliveryAddress].[phonecountrycode]),
    [DeliveryAddress].[id_Countries] = COALESCE(@idCountry, [DeliveryAddress].[id_Countries]),
    [DeliveryAddress].[id_Users] = COALESCE(@idUser, [DeliveryAddress].[id_Users])
WHERE [DeliveryAddress].[id] = @addressId

COMMIT;

SELECT * FROM [DeliveryAddress] WHERE [DeliveryAddress].[id] = @addressId