const express = require("express");
const oracledb = require('oracledb');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080'
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.post("/data", async (req, res) => {
    let con;
    try {
        
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    } finally {
        if (con) {
            await con.close();
        }
    }
});

//GET PIZZEN
app.get("/pizzen", async (req, res) => {
    let con;

    try {
        con = await oracledb.getConnection({
            user: "pizza",
            password: "Gruppe1",
            connectString: "h2922093.stratoserver.net:1521/orcl.stratoserver.net"
        });

        const pizzen = await con.execute(`SELECT * FROM SPEISEKARTE WHERE KATEGORIE = 'pizzen'`);
        res.json(pizzen.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    } finally {
        if (con) {
            await con.close();
        }
    }
});

//GET GETRÄNKE
app.get("/getraenke", async (req, res) => {
    let con;

    try {
        con = await oracledb.getConnection({
            user: "pizza",
            password: "Gruppe1",
            connectString: "h2922093.stratoserver.net:1521/orcl.stratoserver.net"
        });

        const getraenke = await con.execute(`SELECT * FROM SPEISEKARTE WHERE KATEGORIE = 'getraenke'`);
        res.json(getraenke.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    } finally {
        if (con) {
            await con.close();
        }
    }
});

//GET KUCHEN
app.get("/kuchen", async (req, res) => {
    let con;

    try {
        con = await oracledb.getConnection({
            user: "pizza",
            password: "Gruppe1",
            connectString: "h2922093.stratoserver.net:1521/orcl.stratoserver.net"
        });

        const kuchen = await con.execute(`SELECT * FROM SPEISEKARTE WHERE KATEGORIE = 'kuchen'`);
        res.json(kuchen.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    } finally {
        if (con) {
            await con.close();
        }
    }
});


//GET ALLE DATEN
app.get("/data", async (req, res) => {
    let con;

    try {
        con = await oracledb.getConnection({
            user: "pizza",
            password: "Gruppe1",
            connectString: "h2922093.stratoserver.net:1521/orcl.stratoserver.net"
        });

        const data = await con.execute(`SELECT * FROM SPEISEKARTE`);
        res.json(data.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    } finally {
        if (con) {
            await con.close();
        }
    }
});

//DAS IST MEIN POST FÜR ALLE
app.post("/data", async (req, res) => {
    let con;

    try {
        con = await oracledb.getConnection({
            user: "pizza",
            password: "Gruppe1",
            connectString: "h2922093.stratoserver.net:1521/orcl.stratoserver.net"
        });

        const body = req.body;
        const sql = `INSERT INTO SPEISEKARTE (PRODUKT_ID, NAME, KATEGORIE, PREIS) 
                   VALUES (:produkt_id, :name, :kategorie, :preis)`;

        const result = await con.execute(sql, [
            body.produkt_id,
            body.name,
            body.kategorie,
            body.preis
        ]);

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    } finally {
        if (con) {
            await con.close();
        }
    }
});


app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});

//Mit dieser Funktion kann ich hier in NODE die Daten von der Datenbank auslesen und sehen.
/*async function fun() {
    let con;

    try {
        con = await oracledb.getConnection({
            user: 'pizza',
            password: 'Gruppe1',
            connectString: 'h2922093.stratoserver.net:1521/orcl.stratoserver.net'
        });

        const data = await con.execute(
            `SELECT * FROM SPEISEKARTE`,

        );
        console.log(data.rows);
    } catch (err) {
        console.error(err);
    }
}
fun();*/





