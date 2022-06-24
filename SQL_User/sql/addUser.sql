SET XACT_ABORT ON;
BEGIN TRANSACTION;
INSERT INTO [dbo].[Users]
([lastname], [firstname], [pass], [isSuspended],[email],[id_UserTypes])
VALUES
(@Lastname, @Firstname, @Pass, @isSuspended, @Email, (SELECT [id] FROM [dbo].[UserTypes] WHERE [type] = @Type));
COMMIT;