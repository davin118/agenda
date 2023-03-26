# agenda
#create a mysql database
create database crudnodejs;
use crudnodejs;
create table customer(
  id int unsigned auto_increment primary key,
  name varchar(50) not null,
  address varchar(100) not null,
  phone varchar(15) not null
);
