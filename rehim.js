const express = require('express')

const app = express()
const PORT = 5500
let counter = 9
app.use(express.json())

let arr = [
    {
        "id": 2,
        "description": "Sweet and savory sauces relishes spreads and seasonings",
        "name": "Condiments"
    },
    {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
    },
    {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
    },
    {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
    },
    {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
    },
    {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
    },
    {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
    },
    {
        "id": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
    }
]

app.get("/", (req, res) => {
    res.send(arr)
})
app.delete("/", (req, res) => {
    res.send(' delete')
})
// app.post("/", (req, res) => {
//     res.send(' post')
// })
app.put("/", (req, res) => {
    res.send('put')
})

app.get("/:id",(req,res)=>{
    const {id} = req.params
    const item = arr.find((i)=> i.id === +id)
    res.send(item)
})
app.delete("/:id",(req,res)=>{
    const {id} = req.params
    arr = arr.filter((i)=>i.id !== +id)
    res.send(arr)
})
app.post("/",(req,res)=>{
    // const {id} = req.params
    let newItem = {
        "id":counter++,
        "name":req.body.name,
        "description":req.body.description
    }
    arr.push(newItem)
    res.send(arr)
})

app.get("*", (req, res) => {
    res.send("errorrrrrrrrrrrr")
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("Qeseng errorsuz oldu");
    }
})