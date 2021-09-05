const express = require('express')
const produtoController = require('./controller/produto_controller')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/produtos', produtoController.listar)

app.get('/produtos/:id', produtoController.buscarPorId)

app.post('/produtos', produtoController.inserir)

app.put('/produtos/:id', produtoController.atualizar)

app.delete('/produtos/:id', produtoController.deletar)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})