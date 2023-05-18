create database library;

use library;

create table book(
    id int primary key not null AUTO_INCREMENT,
    title varchar(70) not null,
    descripcion text
);

insert into book (title, descripcion) values ("Five Nights at Freddy's","Five Nights at Freddy's: Los ojos de plata es una novela de terror estadounidense con elementos de misterio publicada en 2015 por Scott Cawthon y Kira Breed-Wrisley, basada en la exitosa serie de videojuegos de terror de Five Nights at Freddy's.");