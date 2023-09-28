import './style.css';

type TParametersPanel = {
    children: string | JSX.Element | JSX.Element[];
}

function ParametersPanel({children}: TParametersPanel) {
    return (
    <div className='parameters'>
        <h2 className='text parameters__title'>Компании</h2>
        {children}
    </div>
    )
}
  
export default ParametersPanel