import './topBar.css';

import { useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui-Slice';

const TopBar: React.FC = () => {
    const dispatch = useDispatch();
    
    function openMenu(): void {
        dispatch(uiActions.toggleMenu());
    };

    return (
        <div className="TopBar">
            <button className='MenuButton' onClick={openMenu} />
            <p className='principalTitle'>Star Wars Front End</p>
        </div>
    );
};

export default TopBar;