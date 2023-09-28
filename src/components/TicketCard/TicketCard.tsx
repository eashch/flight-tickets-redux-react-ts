import './style.css';
import iconRedWings from '../../assets/icon_red-wings.png';
import iconS7 from '../../assets/icon_s7.png';
import iconPobeda from '../../assets/icon_pobeda.png';
import { ITicket } from '../../api';

const icons = {
    "Red Wings": [iconRedWings, "icon_red-wings"],
    "S7 Airlines": [iconS7, "icon_s7"],
    "Pobeda": [iconPobeda, "icon_pobeda"]
};

function TicketCard(ticketInfo: ITicket) {

    const getIcon = (str: string) => {
        return icons[str as keyof typeof icons];
    }

    return (
    <div className='ticket'>
        <div className='ticket-info-row'>
            <h2 className='text ticket__price'>
                {ticketInfo.price} Р
            </h2>
            <img className={'header-block__icon ' + getIcon(ticketInfo.company)[1]}
                src={getIcon(ticketInfo.company)[0]} 
                alt={ticketInfo.company} 
            />
        </div>
        <div className='ticket-info-row'>
            <div className='ticket-info-column'>
                <span className='text ticket__text_light'>
                    {ticketInfo.from} - {ticketInfo.to}
                </span>
                <span className='text ticket__text_dark'>
                    {ticketInfo.time.startTime} - {ticketInfo.time.endTime}
                </span>
            </div>
            <div className='ticket-info-column'>
                <span className='text ticket__text_light'>
                    В пути
                </span>
                <span className='text ticket__text_dark'>
                    {Math.floor(ticketInfo.duration / 60)} ч {(ticketInfo.duration % 60)} мин
                </span>
            </div>
            <div className='ticket-info-column'>
                <span className='text ticket__text_light'>
                    Пересадки
                </span>
                <span className='text ticket__text_dark'>
                    {ticketInfo.connectionAmount === 0 
                        ? "Без пересадок" 
                        : ticketInfo.connectionAmount
                    }
                </span>
            </div>
        </div>
    </div>
    )
}
  
export default TicketCard