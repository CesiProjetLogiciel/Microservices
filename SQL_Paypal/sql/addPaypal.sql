SET XACT_ABORT ON;
BEGIN TRANSACTION;
INSERT INTO [dbo].[paypalAddress]
([paypal], [id_Users])
VALUES
(@Paypal, @idUser);
COMMIT;

SELECT * FROM [paypalAddress] WHERE [paypalAddress].[id_Users] = @idUser AND [paypalAddress].[paypal] = @Paypal