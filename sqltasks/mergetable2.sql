USE claysystraining;

CREATE TABLE Product(
     Id INT,
	     Product_Name VARCHAR(65),  
    Price DECIMAL(9,2) 
	)


INSERT INTO Product(ID, Product_Name, Price) VALUES   
 (1, 'Table', 150), (2, 'Desk', 100),  
 (3, 'Chair', 75), (4, 'Computer', 225);  
