SELECT [BillingAddress].*, [Countries].[name]
FROM [BillingAddress]
    INNER JOIN [Countries]
        ON  [BillingAddress].[id_Countries] = [Countries].[id]
WHERE [BillingAddress].[id_Users] = IIF(IsNumeric(@idUsers) = 1, @idUsers, [BillingAddress].[id_Users])