USE claysystraining;

SELECT * FROM login;
SELECT * FROM signup;

SELECT l.email, s.username FROM login AS l RIGHT JOIN signup AS s ON l.email=s.email;
SELECT l.email, s.username FROM login AS l LEFT JOIN signup AS s ON l.email=s.email;
SELECT l.email, s.username FROM login AS l INNER JOIN signup AS s ON l.email=s.email;
SELECT l.email, s.username FROM login AS l FULL OUTER JOIN signup AS s ON l.email=s.email;