export default class SwapiService {
  apiURL = `https://swapi.co/api`;
  imageURL = `https://starwars-visualguide.com/assets/img`;

  getResource = async (url) => {
    const res = await fetch(`${this.apiURL}${url}`);

    if (!res.ok) {
      throw new Error(`Could't fetch ${url}, received ${res.status}`)
    }

    return await res.json();
  }

  transformPerson = ({url, name, gender, birth_year, hair_color, eye_color, height, mass}) => {
    return {
      id: url.slice(28, -1),
      name,
      gender,
      birthYear: birth_year,
      hairColor: hair_color,
      eyeColor: eye_color,
      height,
      mass
    }
  }

  transformPlanet = ({url, name, climate, diameter, population, rotation_period}) => {
    return {
      id: url.slice(29, -1),
      name,
      climate,
      diameter,
      population,
      rotationPeriod: rotation_period
    }
  }

  transformStarship = ({url, name, cost_in_credits, max_atmosphering_speed, crew, passengers, model, starship_class}) => {
    return {
      id: url.slice(31, -1),
      name,
      cost: cost_in_credits,
      speed: max_atmosphering_speed,
      crew,
      passengers,
      model,
      starshipClass: starship_class
    }
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this.transformPerson(person);
  }
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    const people = res.results;
    return people.map(this.transformPerson);
  }
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this.transformPlanet(planet);
  }
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    const planets = res.results;
    return planets.map(this.transformPlanet);
  }
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this.transformStarship(starship);
  }
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    const starships = res.results;
    return starships.map(this.transformStarship);
  }

  getPersonImg = (id) => {
    return `${this.imageURL}/characters/${id}.jpg`;
  }
  getStarshipImg = (id) => {
    return `${this.imageURL}/starships/${id}.jpg`;
  }
  getPlanetImg = (id) => {
    return `${this.imageURL}/planets/${id}.jpg`;
  }
}