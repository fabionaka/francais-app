// Import and run the Express Node web server framework
var express = require('express');
const bodyParser = require('body-parser');
var fs = require("fs");
var chalk = require("chalk");
var path = require("path");
var app = express();
var topicos = require("./data/topicos.json");
var configuration = require("./config.json");

var config = {
    port: (configuration.isProd) ? 8964 : 3000,
    frontend: path.join(__dirname, "../frontend/")
}


app.use("/", express.static(config.frontend));
app.use(express.json())

app.get('/rest', (req, res) => {
    console.log(chalk.green(req.method), req.url)
    var responseJson = {
        status: 200,
        message: "ok"
    };
    res.send(responseJson);
});
app.get('/rest/topicos', (req, res) => {
    console.log(chalk.green(req.method), req.url)
    var responseJson = { ...topicos };
    res.type('json');
    res.send(responseJson);
});

app.post('/rest/topicos', (req, res) => {
    console.log(chalk.green(req.method), req.url)

    if (req.body.hasOwnProperty('tipo') && req.body.tipo == "verbo" && req.body.hasOwnProperty("descricao")) {
        var verificado = topicos.verbos.filter(v => {
            return v.toUpperCase() == req.body.descricao.toUpperCase();
        })

        if (verificado.length == 0) {
            console.log("verbo incluído", chalk.green(req.body.descricao))
            topicos.verbos.push(req.body.descricao);
            var filePath = path.join(__dirname, 'data', 'topicos.json');

            fs.writeFileSync(filePath, JSON.stringify(topicos, null, 2))

        } else {
            console.log(`Verbo " ${chalk.red(req.body.descricao.toUpperCase())} " ja existe na lista.`)
        }


    }
    var responseJson = { ...topicos };
    res.type('json');
    res.send(responseJson);
});

app.delete("/rest/topicos/:tipo/:id", (req, res) => {
    console.log(chalk.green(req.method), req.url);
    console.log("Tipo: ", chalk.yellow(req.params.tipo), "Verbo: ", chalk.yellow(req.params.id));
    console.log();
    var filePath = path.join(__dirname, 'data', 'topicos.json');

    if (req.params.tipo == "verbo") {
        var init = topicos.verbos.length;
        topicos.verbos = topicos.verbos.filter(v => {
            return (v.toUpperCase() != req.params.id.toUpperCase());
        });

        if (init > topicos.verbos.length) {
            console.log(chalk.red("DELETE"), 'ok')
            fs.writeFileSync(filePath, JSON.stringify(topicos, null, 2))
        }
    }
    var responseJson = { ...topicos };
    res.type('json');
    res.send(responseJson);
});

// Point it to the current directory as a static server
//pp.use(express.static('./frontend/'));

// Listen on port 3000 for any traffic
app.listen(config.port, () => console.log(`Servidor do ${chalk.red('MOZÃO')} listen: ${chalk.magenta(config.port)}!`))
