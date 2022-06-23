SELECT [Users].*, [UserTypes].[type]
FROM [Users]
LEFT JOIN [UserTypes]
ON [UserTypes].[id] = [Users].[id_UserTypes];