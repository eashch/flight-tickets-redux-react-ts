import './style.css';
import icon from '../../assets/icon.png';

function HeaderBlock() {
    return (
    <div className='header-block'>
        <img className='header-block__logo' 
            src={icon} alt='Logo Plane' 
        />
        <h1 className='text header-block__title'>
            Поиск авиабилетов
        </h1>
    </div>
    )
}
  
export default HeaderBlock