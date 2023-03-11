import './card.css';

const Card: React.FC = (props) => {
    return (
        <div className="itemCard">
            {props.children}
        </div>
    );
};

export default Card;