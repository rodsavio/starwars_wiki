import Card from "../UI/card";

import { Vehicle } from "../../models/VehiclesModel";

const VehicleCard: React.FC<{ vehicleItem: Vehicle }> = (props) => {
    return (
        <Card>
            <h2>{props.vehicleItem.name}</h2>
            <h4>Cost: {props.vehicleItem.cost_in_credits}</h4> 
        </Card>
    );
};

export default VehicleCard;