import { People } from "./PeopleModel";
import { Planet } from "./PlanetsModel";
import { Specie } from "./SpeciesModel";
import { Starship } from "./StarshipsModel";
import { Vehicle } from "./VehiclesModel";

export type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: Specie[];
    starships: Starship[];
    vehicles: Vehicle[];
    characters: People[];
    planets: Planet[];
    url: string;
    created: string;
    edited: string;
};