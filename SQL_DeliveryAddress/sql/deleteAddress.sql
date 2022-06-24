SET XACT_ABORT ON;
BEGIN TRANSACTION;

DELETE FROM [DeliveryAddress]
WHERE [DeliveryAddress].[id] = @addressId

COMMIT;