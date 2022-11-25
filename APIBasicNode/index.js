const express = require('express')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())

// get
app.route('/get').get((req,res) => res.send("exemplo rota get"))
// requisição do tipo params (url/rota)
app.route('/:variavel').get((req,res) => res.send (req.params.variavel))
app.route('/rota/:variavel').get((req,res) => res.send (req.params.variavel))
// query params
app.route('/rota2/rota').get((req,res) => res.send(req.query))
// ou para pegar exatamente um campo  ... http://localhost:3000/rota2/rota?nome=lucas
app.route('/rota2/rota').get((req,res) => res.send(req.query.nome))

// post
app.route('/post1').post((req,res) => console.log(req.body))
// enviando uma requisição do tipo body (não aparece na url/rota)
app.route('/post2').post((req,res) => res.send(req.body))
// pegando apenas campos especificos do json dos campos
app.route('/post3').post((req,res) => {
    const {nome, cidade} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
})


// put
let animal = "gato"
app.route('/animal').get((req, res) => res.send(animal))
app.route('/put').put((req,res) => {
    animal = req.body.animal
    res.send(animal)
})


// delete
app.route('/:id').delete((req,res) => {
    res.send(req.params.identificador)
})

// enviando uma requição do tipo body (não aparece na url)
app.route('/body').post((req,res) => res.send('teste'))