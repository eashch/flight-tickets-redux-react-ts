import './style.css';

interface ICheckboxProps {
    id: number;
    isRound: boolean;
    title: string;
    isInCurtain: boolean;
    isChecked: boolean;
    onChangeEvent: (isChecked: boolean) => void;
}

function CheckboxCustom(props: ICheckboxProps) {
    return (
    <div className={'checkbox' + (props.isInCurtain 
                                    ? " checkbox_curtain" 
                                    : "")
    }>
        <input className={"checkbox__input_hidden checkbox__input " 
                            + (props.isRound 
                                ? "checkbox__input_round" 
                                : "checkbox__input_regular")
                            + (props.isInCurtain 
                                ? " checkbox__input_curtain" 
                                : "")
                            }  
            type="checkbox" 
            id = {`checkbox${props.id.toString()}`}
            checked={props.isChecked}
            onChange={() => {
                props.onChangeEvent(!props.isChecked);
            }}
        />
        <label htmlFor={`checkbox${props.id.toString()}`}></label>
        <span className={"text checkbox__title " + (props.isInCurtain 
                                ? "checkbox__title_curtain" 
                                : "")}>
            {props.title}
        </span>
    </div>
    )
}
  
export default CheckboxCustom