const express = require('express')
const router = express.Router()

let  listaPessoa = [
    {
        id: 1,
        nome: "Maria",
        idade: 23,
        email: "maria@email.com",
        telefone: 6199999-1111
    },
    {
        id: 2,
        nome: "Jenifer",
        idade: 21,
        email: "jenifer@email.com",
        telefone: 6199999-2222
    },
    {
        id: 3,
        nome: "Pedro",
        idade: 19,
        email: "pedro@email.com",
        telefone: 6199999-3333
    },
    {
      id: 4,
        nome: "Nataly",
        idade: 22,
        email: "nataly@email.com",
        telefone: 6199999-4444
    }
]

router.get('/pessoas', (req, res) => {
    res.json(listaPessoa)
})

router.get('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoa.findIndex(pessoa => pessoa.id == id)
    const pessoa = listaPessoa[index]
    res.json(pessoa)
})

router.post('/pessoas', (req, res) =>{
    const novaPessoa = req.body

    listaPessoa.length

    const pessoa = {
        id: listaPessoa.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    listaPessoa.push(pessoa)
    res.status(201).json({mensagem: "Pessoa cadastrada com sucesso!"})

})

router.delete('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoa.findIndex(pessoa => pessoa.id == id)
    listaPessoa.splice(index, 1)
    res.json({mensagem: "Pessoa excluida com sucesso!"})
})

router.put('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoa.findIndex(pessoa => pessoa.id == id)

    const novosDados = req. body

    const alteradar = {
        id: id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    listaPessoa[index] = alteradar

    res.json({mensagem: "Pessoa atualizada com sucesso!"})
})
module.exports = router