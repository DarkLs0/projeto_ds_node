const bd = require("../config/database");

const criarUsuario = async (
    nome,
    email,
    telefone,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    login,
    senha
) =>  { 
    const sql = 
        INSERT INTO usuarios
        (
                nome,
                email,
                telefone,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                login,
                senha
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const [resultado] = await db.execute(sql, [
     nome,
                email,
                telefone,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                login,
                senha
