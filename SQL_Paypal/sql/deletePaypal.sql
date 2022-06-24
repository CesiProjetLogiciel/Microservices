SET XACT_ABORT ON;
BEGIN TRANSACTION;

DELETE FROM [paypalAddress]
WHERE [paypalAddress].[id] = @paypalId

COMMIT;