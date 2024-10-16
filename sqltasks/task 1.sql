INSERT INTO production.pokiman(name, phone,email)
VALUES('bulbasa','1234567899','bulbasa@pika.com')
INSERT INTO production.pokiman(name, phone,email)
VALUES('iuvsaur','1234567899','iuvsaur@pika.com')
INSERT INTO production.pokiman(name, phone,email)
VALUES('venusau','1234567899','venusau@pika.com')
INSERT INTO production.pokiman(name, phone,email)
VALUES('pidge','1234567899','pidge@pika.com')
SELECT * FROM production.pokiman;

UPDATE production.pokiman
SET name='pradeesh' WHERE name='iuvsaur';
SELECT * FROM production.pokiman;
