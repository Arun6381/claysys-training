USE claysystraining;

CREATE TABLE Targettable(
     Id INT,
	     Product_Name VARCHAR(65),  
    Price DECIMAL(9,2) 
	)


INSERT INTO Targettable(ID, Product_Name, Price) VALUES   
(1, 'Table', 150),  
(2, 'Desk', 150),  
(5, 'Bed', 100),  
(6, 'Cupboard', 350);   

SELECT * FROM Targettable; 
