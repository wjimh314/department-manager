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

    INSERT INTO employees(firstName,lastName,role_id,department_id)
    values ("john","smith",1,1);
          /*("bob","joe","salesperson",1,80000,),
           ("steve","johnson","lead engineer" ,2,120000),
           ("bob","stevens","software Engineer",2,130000),
           ("john","doe","accountant manager",3,1000000),
           ("sandy""smith","accountant",3,100000),
           ("andy","lawyer",4,120000),
           ("al","legal team leader",4,150000);