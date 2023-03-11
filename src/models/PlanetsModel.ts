import { Film } from "./FilmsModel";
import { People } from "./PeopleModel"

export type Planet = {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: People[];
    films: Film[];
    url: string;
    created: string;
    edited: string;
}

export type PlanetsList = {
    count: number;
    next: string | any;
    previous: string | any;
    results: Planet[];
};

export const PlanetsListInitial: PlanetsList = {count: 0, next: null, previous: null, results: []};
