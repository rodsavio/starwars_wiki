import Card from "../UI/card";

import { Link } from "react-router-dom";
import { People } from "../../models/PeopleModel";

const CharacterCard: React.FC<{ character: People }> = (props) => {
    return (
        <Card>
            <h2>{props.character.name}</h2>
            <h4>Birth Year: {props.character.birth_year}</h4> 
            <h4>Eye Color: {props.character.eye_color}</h4>
            <h4>Gender: {props.character.gender}</h4>
            <h4>height: {props.character.height}</h4>
            <h4>Movies: {props.character.films.length}</h4>
            <h4><Link to='/character/detail/1'>Details</Link></h4>
        </Card>
    );
};

export default CharacterCard;