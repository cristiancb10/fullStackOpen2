require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()

app.use(express.json())

morgan.token('body', (request, res) => JSON.stringify(request.body))

app.use(morgan(`:method :url :status :res[content-length] - :response-time ms :body`))

app.use(cors())

app.use(express.static('dist'))

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/info', (request, response) => {
    Person.countDocuments({}).then(count => {
        const dateNow = new Date()
        response.send(
            `<div>
                Phonebook has info for ${count} people<br/>
                ${dateNow}
            </div>`
        )
    })
})

app.get('/api/persons/:id', (request, response) => {

    Person.findById(request.params.id).then(person => {
        if(person) {
            response.json(person)
        }else {
            response.status(404).end()
        }
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const generateId = () => {
    let id
    do{
        id = Math.floor(Math.random() * 1000000) 
    } while(persons.find(person => person.id === id))
    return id
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name && !body.number) {
        return response.status(400).json({
            error: "name and number are missing"
        })
    }

    if(!body.name) {
        return response.status(400).json({
            error: "name missing"
        })
    }

    if(!body.number) {
        return response.status(400).json({
            error: "number missing"
        })
    }
    
    const personFound = persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())  
    if(personFound) {
        return response.status(400).json({
            error: "name must be unique"
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number 
    }

    persons = persons.concat(person)

    response.json(person)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})