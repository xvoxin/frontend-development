import Database from './database'
import  { ElectricScooter, ElecricVehicle, Hoverboard } from './vehicle'

const database = new Database()

database.addVehicle(new Hoverboard(
    "BoostedBoard",
    30,
    5679.99,
    true,
    true
))

let vehicles = database.getVehicles()
console.log(vehicles)