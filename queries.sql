create database bdd_node_red;

create table tab_teste (
	id int primary key auto_increment,
    nome varchar(60),
    cpf varchar(11),
    dt_nasc datetime
);

drop table tab_teste;

insert into tab_teste (nome, cpf, dt_nasc) 
	values ("fentyrihanna", "55544433322", "2023-02-20 12:39:59"),
    ("simonssimone", "88877766655", "2023-01-17 13:30:22"), 
    ("palvinbarbara", "77766655544", "2023-10-08 19:15:47"),
    ("daddarioalexandra", "66655544433", "2023-03-16 00:03:19"),
    ("pinhocesar", "99988877766", "2023-06-18 00:00:50");

select * from tab_teste;