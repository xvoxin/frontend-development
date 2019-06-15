import { Database } from './database'
import  { ElectricScooter, ElecricVehicle, Hoverboard } from './vehicle'

const database = new Database()

var xiaomiScooter = new ElectricScooter(
    "Xiaomi m365",
    30,
    1699.99,
    true,
    6
)

var kawasakiBoard = new Hoverboard(
    "Kawasaki",
    15,
    2459.79,
    true,
    false
)

database.addVehicle(xiaomiScooter)
database.addVehicle(kawasakiBoard)

database.addVehicle(xiaomiScooter)
database.addVehicle(kawasakiBoard)
database.addElectricScooter(
    "Xiaomi MiJia m365 PRO",
    "45",
    2679.99,
    true,
    6
)
var xiaomiInBase = database.isVehicleExistsInBase(xiaomiScooter)
var kawasakiInBase = database.isVehicleExistsInBase(kawasakiBoard)
console.log(`Xiaomi in base ${xiaomiInBase}`)
console.log(`Kawasaki in base ${kawasakiInBase}`)
console.log(database.getVehicles())

database.removeVehicle(kawasakiBoard)
database.isVehicleExistsInBase(kawasakiBoard)
console.log(database.getVehicles())
kawasakiInBase = database.isVehicleExistsInBase(kawasakiBoard)
console.log(`Kawasaki in base ${kawasakiInBase}`)