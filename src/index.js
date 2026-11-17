const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

app.use(
    express.urlencoded({
        extended: true
    })
);


// Views
app.use(
    express.static("src/views")
);


// Rotas dos usuários
const usuarioRoutes =
    require("../routes/UsuarioRoute");

app.use(
    "/api",
    usuarioRoutes
);


// Rotas de APIs externas
const apiRoutes =
    require("../routes/Routes");

app.use(
    "/api",
    apiRoutes
);


app.get("/", (req, res) => {

    res.sendFile(
        "login.html",
        {
            root: "src/views"
        }
    );

});


module.exports = app;

/*const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('API funcionando!!!');
});

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'João' },
        { id: 2, nome: 'Maria' }
    ]);
});

module.exports = app;*/
