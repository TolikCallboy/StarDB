export default class DummySwapiService {

  _people = [
    {
      id: 1,
      name: 'Garrosh Hellscream [TEST DATA]',
      gender: 'Male',
      birthYear: 'data not found',
      eyeColor: 'red'
    },
    //
    // {
    //   id: 2,
    //   name: 'Thrall, son of Durotan [TEST DATA]',
    //   gender: 'Male',
    //   birthYear: 'data not found',
    //   eyeColor: 'green'
    // }
  ];

  _planets = [
    {
      id: 1,
      name: 'Aiur [TEST DATA]',
      population: 'data not found',
      rotationPeriod: 'data not found',
      diameter: 'data not found'
    },
    // {
    //   id: 2,
    //   name: 'Draenor [TEST DATA]',
    //   population: 'data not found',
    //   rotationPeriod: 'data not found',
    //   diameter: 'data not found'
    // }
  ];

  _starships = [
    {
      id: 1,
      name: 'Гиперион [TEST DATA]',
      model: 'data not found',
      manufacturer: 'data not found',
      costInCredits: 'data not found',
      length: 'data not found',
      crew: 980000000,
      passengers: 50000,
      cargoCapacity: 24000000
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `data:image/jpeg;base64,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`
  };

  getStarshipImage = () => {
    return `data:image/jpeg;base64,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`;
  };

  getPlanetImage = () => {
    return `https://dic.academic.ru/pictures/wiki/files/80/Planet-Agria.jpg`
  };
}