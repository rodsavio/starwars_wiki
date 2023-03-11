import Card from "../UI/card";

import { Starship } from "../../models/StarshipsModel";

const StarshipCard: React.FC<{ starshipItem: Starship }> = (props) => {
    return (
        <Card>
            <h2>{props.starshipItem.name}</h2>
            <h4>Cost: {props.starshipItem.cost_in_credits}</h4> 
        </Card>
    );
};

export default StarshipCard;