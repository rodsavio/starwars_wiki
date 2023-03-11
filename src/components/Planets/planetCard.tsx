import Card from "../UI/card";

import { Planet } from "../../models/PlanetsModel";

const PlanetCard: React.FC<{ planetItem: Planet }> = (props) => {
    return (
        <Card>
            <h2>{props.planetItem.name}</h2>
            <h4>Diameter: {props.planetItem.diameter}</h4> 
            <h4>Rotation Period: {props.planetItem.rotation_period}</h4>
            <h4>Orbital Period: {props.planetItem.orbital_period}</h4>
            <h4>Gravity: {props.planetItem.gravity}</h4>
        </Card>
    );
};

export default PlanetCard;