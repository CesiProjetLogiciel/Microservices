SELECT [BillingAddress].*, [Countries].[name]
FROM [BillingAddress]
         INNER JOIN [Countries]
                    ON  [BillingAddress].[id_Countries] = [Countries].[id]
WHERE [BillingAddress].[id] = @addressId