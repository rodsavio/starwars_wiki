import { Film } from "./FilmsModel"
import { People } from "./PeopleModel"

export type Vehicle = {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    films: Film[];
    pilots: People[];
    url: string;
    created: string;
    edited: string;
};

export type VehiclesList = {
    count: number;
    next: string | any;
    previous: string | any;
    results: Vehicle[];
};

export const VehiclesListInitial: VehiclesList = { count: 0, next: null, previous: null, results: [] };
