SELECT [DeliveryAddress].*, [Countries].[name]
FROM [DeliveryAddress]
         INNER JOIN [Countries]
                    ON  [DeliveryAddress].[id_Countries] = [Countries].[id]
WHERE [DeliveryAddress].[id] = @addressId