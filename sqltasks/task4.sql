
USE claysystraining;

CREATE TABLE employeedep(
emp_id INT IDENTITY(1,1) PRIMARY KEY,
  emp_name VARCHAR(50),
  salary INT,
  emp_dep VARCHAR(10)
  );

 INSERT INTO employeedep 
 VALUES
('john', 20000, 'IT'),
('jane', 25000, 'HR'),
('alice', 22000, 'HR'),
('bob', 18000, 'Marketing'),
('emma', 27000, 'Sales'),
('paul', 23000, 'HR'),
('linda', 24000, 'HR');

SELECT * FROM employeedep;

SELECT COUNT(emp_id),emp_dep
FROM employeedep
GROUP BY emp_dep;

