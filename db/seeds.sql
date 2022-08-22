USE employees_db;
INSERT INTO departments( department_name)
VALUES ("sales"),
       ("Engineering"),
       ("fiance"),
       ("legal");

INSERT INTO roles(title,department_id,salary)
VALUES ( "sales lead",1,100000),
       ("sales person",1,80000),
       ("lead Engineer",2,120000),
       ("software Engineer",2,130000),
       ("accountant manager",3,1000000),
       ("accountant",3,100000),
       ("lawyer",4,120000),
    ("legal team leader",4,150000);

INSERT INTO employees(first_name,last_name,role_id,manager_id)
VALUES ("JOHN","DOE",1,1);