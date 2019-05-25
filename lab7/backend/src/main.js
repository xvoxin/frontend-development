import { VehicleService } from "./service/vehicleService"
import express from 'express'
import bodyParser from 'body-parser'
import { VehicleFactory } from "./domain/vehicleFactory";

const app = new express()
const port = 4000

const vehicleFactory = new VehicleFactory()

app.use(bodyParser.json())

const service = new VehicleService()

app.get('/api/', (req, res) => res.send('Hello'))

app.get('/api/vehicles/all', (req, res) => res.send(service.getVehicles()))

app.post('/api/vehicles/create', (req, res) => {
    var vehicle = vehicleFactory.createVehicle(req)
    var result = service.addVehicle(vehicle)
    res.send({ "result": result })
})

app.post('/api/vehicles/update', (req, res) => {
    var vehicle = vehicleFactory.createVehicle(req)
    var result = service.addVehicle(vehicle)
    res.send({ "result": result })
})

app.post('/api/vehicles/delete', (req, res) => {
    var result = service.removeVehicle(req.body.name)
    res.send({ "result": result })
})

app.listen(port, () => console.log(`App listening on port ${port}`))