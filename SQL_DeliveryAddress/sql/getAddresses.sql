SELECT [DeliveryAddress].*, [Countries].[name]
FROM [DeliveryAddress]
    INNER JOIN [Countries]
        ON  [DeliveryAddress].[id_Countries] = [Countries].[id]
WHERE [DeliveryAddress].[id_Users] = IIF(IsNumeric(@idUsers) = 1, @idUsers, [DeliveryAddress].[id_Users])