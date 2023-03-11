import './generalList.css';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import UseApi from '../../hooks/use-Api';
import CharacterCard from '../Characters/characterCard';
import PageNumbers from '../UI/pageNumbers';

import { uiActions } from '../../store/ui-Slice';

import FilmCard from '../Films/filmCard';
import { Film } from '../../models/FilmsModel';
import { GeneralResponse, GeneralResponseInitial } from '../../models/GeneralListModel';
import { People } from '../../models/PeopleModel';
import PlanetCard from '../Planets/planetCard';
import { Planet } from '../../models/PlanetsModel';
import { Specie } from '../../models/SpeciesModel';
import SpecieCard from '../Species/specieCard';
import { Starship } from '../../models/StarshipsModel';
import StarshipCard from '../Starchips/starshipCard';
import { Vehicle } from '../../models/VehiclesModel';
import VehicleCard from '../Vehicles/vehicleCard';

const GeneralList: React.FC<{ module: string }> = (props) => {
    const dispatch = useDispatch();
    const { idPage } = useParams<{ idPage: string; }>();

    const [listItems, setListItems] = useState<GeneralResponse>(GeneralResponseInitial);

    useEffect(() => {
        const CallApi = async () => {
            dispatch(uiActions.toggleLoading());

            let apiUrl = ('https://swapi.dev/api/{0}/?page={1}')
                .replace('{0}', props.module)
                .replace('{1}', idPage);
    
            const response = await UseApi(apiUrl);
            setListItems(response);
    
            dispatch(uiActions.toggleLoading());
        };

        if (listItems.count === 0) {
            CallApi();
        }
    }, [props.module, listItems, dispatch, idPage]);    

    let pageTitle;
    let listCards;

    switch (props.module) {
        case 'films':
            pageTitle = 'Films';
            listCards = 
                listItems.results.map(item => {
                    const data: Film = item;
                    return (
                        <FilmCard key={data.url} filmItem={data} />
                    );
                });
            break;
        case 'people':
            pageTitle = 'Characters';
            listCards = 
                listItems.results.map(item => {
                    const data: People = item;
                    return (
                        <CharacterCard key={data.url} character={data} />
                    );
                });
            break;
        case 'planets':
            pageTitle = 'Planets';
            listCards = 
                listItems.results.map(item => {
                    const data: Planet = item;
                    return (
                        <PlanetCard key={data.url} planetItem={data} />
                    );
                });
            break;
        case 'species':
            pageTitle = 'Species';
            listCards = 
                listItems.results.map(item => {
                    const data: Specie = item;
                    return (
                        <SpecieCard key={data.url} specieItem={data} />
                    );
                });
            break;
        case 'starships':
            pageTitle = 'Starships';
            listCards = 
                listItems.results.map(item => {
                    const data: Starship = item;
                    return (
                        <StarshipCard key={data.url} starshipItem={data} />
                    );
                });
            break;
        case 'vehicles':
            pageTitle = 'Vehicles';
            listCards = 
                listItems.results.map(item => {
                    const data: Vehicle = item;
                    return (
                        <VehicleCard key={data.url} vehicleItem={data} />
                    );
                });
            break;
    }

    let pageElement = <PageNumbers moduleUrl={`/${props.module}/`} totalItems={listItems.count} currentPage={idPage} />

    return (
        <div className='PageList'>
            <h1>{pageTitle}</h1>

            <div className="ListCards">
                {listCards}     
            </div>

            {pageElement}
        </div>
    );
};

export default GeneralList;