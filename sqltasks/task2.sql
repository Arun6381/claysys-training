USE claysystraining;

CREATE TABLE employee(
emp_id INT IDENTITY(1,1) PRIMARY KEY,
  emp_name VARCHAR(50),
  salary INT,
  emp_dep VARCHAR(10)
  );

 INSERT INTO employee 
 VALUES
 ('john',20000,'it'),
 ('jane', 25000, 'HR'),
('alice', 22000, 'Finance'),
('bob', 18000, 'Marketing'),
('emma', 27000, 'Sales');

SELECT * FROM employee;

SELECT MAX(salary) AS second_highest_salary
FROM employee
WHERE salary < (SELECT MAX(salary) FROM employee);

UPDATE employee SET salary=salary-2000;

SELECT * FROM employee;