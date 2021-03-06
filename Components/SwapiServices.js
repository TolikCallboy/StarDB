
export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Could not fetch ${url}` + `, received ${res.status}` )
        }

        const body = await res.json()
        return body;
    }
zz
    async getAllPeople() {
        const res = await this.getResource(`/people`)
        return res.results.map(this._transformPerson)
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person)
    }

    async getAllPlanets() {
        const res =  await this.getResource(`/planets`)
        return res.results.map(this._trensformPlanet)
    }

    async getPlanet(id) {
       const planet = await this.getResource(`/planets/${id}`)
       return this._trensformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships`)
        return res.results.map(this._transformStarship)
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship)
    }

    _excractId (item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }

    _trensformPlanet = (planet) => {
        return {
            id: this._excractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter}
    }

    _transformStarship = (starship) => {
        debugger
        return {
            id: this._excractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._excractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }
}


// const swapi = new SwapiService();
//
// swapi.getStarship(3).then((p) => {
//         console.log(p.name)
//     }
// )
//
// swapi.getAllStarships().then((starships) => {
//     starships.forEach((s) => {
//         console.log(s.name)
//     })
// })





