
const axios = require('axios')

export class VehicleServce {

    async getVehicles() {
        return await axios.get('http://localhost/4000/api/vehicles/all')
    }

}