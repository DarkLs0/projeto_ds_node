--
CREATE DATABASE projeto_backend_angela;
--
USE projeto_backend_angela;
--
CREATE TABLE usuarios (
    id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    login VARCHAR(50),
    senha VARCHAR(10)
);
--

insert into usuarios Values (
NULL, 'Lucas', 'L0c4s', '12356'
);

SELECT *
    FROM usuarios;
