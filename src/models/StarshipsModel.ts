import { Film } from "./FilmsModel";
import { People } from "./PeopleModel";

export type Starship = {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: Film[];
    pilots: People[];
    url: string;
    created: string;
    edited: string;
};

export type StarshipsList = {
    count: number;
    next: string | any;
    previous: string | any;
    results: Starship[];
};

export const StarshipsListInitial: StarshipsList = { count: 0, next: null, previous: null, results: [] };
