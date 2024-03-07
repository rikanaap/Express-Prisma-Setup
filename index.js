//packages
const express = require("express");

//port
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.static('public'));

//TODO: ....role/1
app.get("/role/:id", (req, res, next) => {
    if (req.params.id != "1") return res.send('Kamu nomor 1')
    if (req.query.nama) return res.send(req.query.nama)
    next()
}, async (req, res) => { 
    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    const dataRole = await prisma.role.din({ where: { id: +req.params.id }, select: { name: true, description: true } })
    return res.send(dataRole)
})

//error handler
app.use((err, req, res, next) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
