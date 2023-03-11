import Card from "../UI/card";

import { Film } from "../../models/FilmsModel";

const FilmCard: React.FC<{ filmItem: Film }> = (props) => {
    return (
        <Card>
            <h2>{props.filmItem.title}</h2>
            <h4>Episode Number: {props.filmItem.episode_id}</h4> 
            {/* <h4>Eye Color: {props.character.eye_color}</h4>
            <h4>Gender: {props.character.gender}</h4>
            <h4>Hair Color: {props.character.hair_color}</h4>
            <h4>height: {props.character.height}</h4>
            <h4>Homeworld: {props.character.homeworld}</h4> */}
        </Card>
    );
};

export default FilmCard;