SET XACT_ABORT ON;
BEGIN TRANSACTION;
INSERT INTO [dbo].[BillingAddress]
([zipcode],[city],[address],[state],[additionnalInfo],[lastname],[firstname],[phonenumber],[phonecountrycode],[id_Countries],[id_Users])
VALUES
(@Zipcode,@City,@Address,@State,@AdditionnalInfo,@Lastname,@Firstname,@PhoneNumber,@PhoneCountryCode,@idCountry,@idUser);
COMMIT;

SELECT * FROM [BillingAddress] WHERE [BillingAddress].[id_Users] = @idUser AND [BillingAddress].[address] = @Address;