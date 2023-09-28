import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../api';
import { ESortType, setSortType } from '../../settingsSlice';
import './style.css';

function TicketsHeader() {
    const sortType: ESortType = useSelector((state: RootState) => state.settings.sortType);
    const dispatch = useDispatch();

    return (
    <div className='tickets-header'>
        <button className= {'text tickets-header__button tickets-header__button_left' 
                    + (sortType === ESortType.Cheapest 
                        ? " tickets-header__button_active" : "")}
            onClick={() => dispatch(setSortType(ESortType.Cheapest))}
        >
            Самый дешевый
        </button>
        <button className={'text tickets-header__button' 
                    + (sortType === ESortType.Fastest 
                        ? " tickets-header__button_active" : "")}
            onClick={() => dispatch(setSortType(ESortType.Fastest))}
        >
            Самый быстрый
        </button>
        <button className={'text tickets-header__button tickets-header__button_right' 
                    + (sortType === ESortType.MostOptimal 
                        ? " tickets-header__button_active" : "")}
            onClick={() => dispatch(setSortType(ESortType.MostOptimal))}
        >
            Самый оптимальный
        </button>
    </div>
    )
}
  
export default TicketsHeader