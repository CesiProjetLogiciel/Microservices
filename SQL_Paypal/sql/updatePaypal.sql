SET XACT_ABORT ON;
BEGIN TRANSACTION;

UPDATE [paypalAddress]
SET [paypalAddress].[paypal] = COALESCE(@Paypal, [paypalAddress].[paypal]),
    [paypalAddress].[id_Users] = COALESCE(@idUser, [paypalAddress].[id_Users])
WHERE [paypalAddress].[id] = @paypalId

COMMIT;

SELECT * FROM [paypalAddress] WHERE [paypalAddress].[id] = @paypalId