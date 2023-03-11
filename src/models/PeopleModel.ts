import { Film } from "./FilmsModel";
import { Specie } from "./SpeciesModel";
import { Starship } from "./StarshipsModel";
import { Vehicle } from "./VehiclesModel";

export type People = {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: Film[];
    species: Specie[];
    starships: Starship[];
    vehicles: Vehicle[];
    url: string;
    created: string;
    edited: string;
};

export type PeopleList = {
    count: number;
    next: string | any;
    previous: string | any;
    results: People[];
};

export const PeopleListInitial: PeopleList = {count: 0, next: null, previous: null, results: []};
