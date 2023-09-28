import LeftBlock from '../LeftBlock/LeftBlock';
import ParametersCurtain from '../ParametersCurtain/ParametersCurtain';
import TicketsHeader from '../TicketsHeader/TicketsHeader';
import TicketCard from '../TicketCard/TicketCard';
import './style.css';
import { ITicket, RootState, store, ticketsSelectors } from '../../api';
import { useSelector } from 'react-redux';
import { ESortType } from '../../settingsSlice';

function MainBlock() {
    const settings = useSelector((state: RootState) => state.settings);
    const tickets = ticketsSelectors.selectAll(store.getState())

    const filterByField = (options: (string|number)[], filter: string | number) => {
        if (options.length === 0)
            return true;
        return options.includes(filter);
    }

    const displayTickets = (): JSX.Element[] => {
        switch (settings.sortType) {
            case ESortType.Cheapest:
                tickets.sort((a, b) => a.price - b.price)
                break;
            case ESortType.Fastest:
                tickets.sort((a, b) => a.duration - b.duration)
                break;
            case ESortType.MostOptimal:
                tickets.sort((a, b) => a.connectionAmount - b.connectionAmount)
                break;
        };
        const companies = tickets.filter(
            (value) => filterByField(settings.companies, value.company));
        const connections = companies.filter(
            (value) => filterByField(settings.connections, value.connectionAmount));
        return connections.map((ticket: ITicket) => {
            return (<TicketCard
                {...ticket}
                key={ticket.id}
            />)
        })
    };

    return (
    <div className='main-block'>
        <LeftBlock />
        <div className='tickets'>
            <TicketsHeader />
            <ParametersCurtain />
            <div className='tickets-container'>
                {displayTickets()}
            </div>
            <button className='text tickets__button-load-more'>Загрузить еще билеты</button>
        </div>
    </div>
    )
}
  
export default MainBlock