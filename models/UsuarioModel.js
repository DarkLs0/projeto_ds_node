const res = require("express/lib/response");
const db = require("../config/database");

const criarUsuario = async (
    nome,
    login,
    senha
) => {
    const sql = `INSERT INTO 
                usuarios(nome, login, senha)
                VALUES (?, ?, ?) `;
                
    
    const [resultado] = await db.execute(sql, [nome, login, senha]);
    return resultado;
}
