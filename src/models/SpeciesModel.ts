import { Film } from "./FilmsModel";
import { People } from "./PeopleModel";

export type Specie = {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: People[];
    films: Film[];
    url: string;
    created: string;
    edited: string;
};

export type SpeciesList = {
    count: number;
    next: string | any;
    previous: string | any;
    results: Specie[];
};

export const SpeciesListInitial: SpeciesList = { count: 0, next: null, previous: null, results: [] };
