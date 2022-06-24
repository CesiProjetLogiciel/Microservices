SELECT [paypalAddress].*
FROM [paypalAddress]
WHERE [paypalAddress].[id_Users] = IIF(IsNumeric(@idUsers) = 1, @idUsers, [paypalAddress].[id_Users])