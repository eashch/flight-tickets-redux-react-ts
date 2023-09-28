import './style.css';
import arrowIcon from '../../assets/dropdown-arrow.png';
import { useState } from 'react';
import { RootState } from '../../api';
import { useSelector } from 'react-redux';
import OptionsGroup from '../OptionsGroup/OptionsGroup';

function ParametersCurtain() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const settings = useSelector((state: RootState) => state.settings);

    return (
    <div className='curtain'>
        <button className='text curtain__button-show-dropdown'
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className='curtain__info'>
                {
                    ((settings.companies.length === 0 || settings.companies.length === 3)
                        ? 'Любая авиакомпания, ' 
                        : 'Компании: ' + settings.companies.join(', ') + ', ') + 
                    ((settings.connections.length === 0 || settings.connections.length === 4) 
                        ? 'любое кол-во пересадок' 
                        : 'пересадок: ' + settings.connections.join(', '))
                }
            </span>
            <div className='description'>
                <span className='text description__button-description'>
                    Открыть настройки
                </span>
                <img className={'description__arrow' + (isOpen ? ' description__arrow_up' : '')}
                    src={arrowIcon} alt='Arrow' 
                />
            </div>
        </button>
        <OptionsGroup 
            isInCurtain = {true}
            isOpen = {isOpen}
        />
    </div>
    )
}
  
export default ParametersCurtain