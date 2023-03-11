import Card from "../UI/card";

import { Specie } from "../../models/SpeciesModel";

const SpecieCard: React.FC<{ specieItem: Specie }> = (props) => {
    return (
        <Card>
            <h2>{props.specieItem.name}</h2>
            <h4>Classification: {props.specieItem.classification}</h4> 
            {/* <h4>Eye Color: {props.character.eye_color}</h4>
            <h4>Gender: {props.character.gender}</h4>
            <h4>Hair Color: {props.character.hair_color}</h4>
            <h4>height: {props.character.height}</h4>
            <h4>Homeworld: {props.character.homeworld}</h4> */}
        </Card>
    );
};

export default SpecieCard;