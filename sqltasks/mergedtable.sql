SELECT * FROM Product;
SELECT * FROM Targettable;

MERGE Targettable AS Target
USING Product AS Source
ON Source.Id = Target.Id  
WHEN NOT MATCHED BY Target THEN  
    INSERT (Id, Product_Name, Price)   
    VALUES (Source.Id, Source.Product_Name, Source.Price);  