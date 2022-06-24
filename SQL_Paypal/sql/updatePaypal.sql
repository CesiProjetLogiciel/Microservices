SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [paypalAddress]
SET [paypalAddress].[paypal] = @Paypal,
    [paypalAddress].[id_Users] = @idUser
WHERE [paypalAddress].[id] = @paypalId

COMMIT;

SELECT * FROM [paypalAddress] WHERE [paypalAddress].[id] = @paypalId