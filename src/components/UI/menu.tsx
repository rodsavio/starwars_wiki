import './menu.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-Slice';

var listPages = [
    { id: 0, url: '/', displayName:'Home'}, 
    { id: 1, url: '/films/1', displayName:'Films'},
    { id: 2, url: '/people/1', displayName:'Characters'},
    { id: 3, url: '/planets/1', displayName:'Planets'},
    { id: 4, url: '/species/1', displayName:'Species'},
    { id: 5, url: '/starships/1', displayName:'Starships'},
    { id: 6, url: '/vehicles/1', displayName:'Vehicles'},
];

const Menu: React.FC = () => {
    const dispatch = useDispatch();

    function toggleMenu() {
        dispatch(uiActions.toggleMenu());
    }

    return (
        <div className="menuScreen">
            <div className="menuList">
                <nav>
                    <ul>
                        {listPages.map(item => {
                            return(
                                <li key={item.id} className='listItem' onClick={toggleMenu}><Link to={item.url}>{item.displayName}</Link></li>
                            );
                        })}                        
                    </ul>
                </nav>          
            </div>
            <div className="menuBackground" onClick={toggleMenu}>
            </div>
        </div>
    );
};

export default Menu;