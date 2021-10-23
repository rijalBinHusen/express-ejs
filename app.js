const express = require("express")

const app = express()
const port = 3000

app.set("views", "./views") //views directory
app.set("view engine", "ejs") //template engine register

app.get("/", (req, res) => {
    const fruits = [
        {name: "apple"},
        {name: "orange"},
        {name: "melon"},
        {name: "banana"}
    ]
    res.render("index", {
        name: "Saiful Rizal",
        age: 26,
        fruits: fruits
    })
})

app.get("/:name", (req, res) => res.send(`Nama saya: ${req.params.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))