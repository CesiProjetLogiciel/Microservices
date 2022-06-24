SET XACT_ABORT ON;
BEGIN TRANSACTION;

DELETE FROM [BillingAddress]
WHERE [BillingAddress].[id] = @addressId

COMMIT;