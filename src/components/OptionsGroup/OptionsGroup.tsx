import { useDispatch, useSelector } from 'react-redux';
import { EAirlines, RootState } from '../../api';
import CheckboxCustom from '../CheckboxCustom/CheckboxCustom';
import ParametersPanel from '../ParametersPanel/ParametersPanel';
import './style.css';
import { toggleCompany, toggleConnection } from '../../settingsSlice';

type TOptionsGroup = {
    isInCurtain: boolean;
    isOpen: boolean;
}

function OptionsGroup(props: TOptionsGroup) {
    const settings = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch();

    return (
        <div className={props.isInCurtain ? 'curtain-options' : 'left-block'}
            style={props.isInCurtain ?  {display: props.isOpen ? 'flex' : 'none' } : {}}
        >
            <ParametersPanel>
                <CheckboxCustom
                    id = {11}
                    isRound = {false}
                    title = 'Без пересадок'
                    isInCurtain = {props.isInCurtain}
                    isChecked = {settings.connections.includes(0)}
                    onChangeEvent={() => {
                        dispatch(toggleConnection(0));
                    }}
                />
                <CheckboxCustom
                    id = {12}
                    isRound = {false}
                    title = '1 пересадка'
                    isInCurtain = {props.isInCurtain}
                    isChecked = {settings.connections.includes(1)}
                    onChangeEvent={() => {
                        dispatch(toggleConnection(1));
                    }}
                />
                <CheckboxCustom
                    id = {13}
                    isRound = {false}
                    title = '2 пересадка'
                    isInCurtain = {props.isInCurtain}
                    isChecked = {settings.connections.includes(2)}
                    onChangeEvent={() => {
                        dispatch(toggleConnection(2));
                    }}
                />
                <CheckboxCustom
                    id = {14}
                    isRound = {false}
                    title = '3 пересадка'
                    isInCurtain = {props.isInCurtain}
                    isChecked = {settings.connections.includes(3)}
                    onChangeEvent={() => {
                        dispatch(toggleConnection(3));
                    }}
                />
            </ParametersPanel>
            <ParametersPanel>
                <CheckboxCustom
                    id = {15}
                    isRound = {true}
                    title = {'Победа'}
                    isInCurtain = {props.isInCurtain}
                    isChecked = {settings.companies.includes(EAirlines.pobeda)}
                    onChangeEvent={() => {
                        dispatch(toggleCompany(EAirlines.pobeda));
                    }}
                />
                <CheckboxCustom
                    id = {16}
                    isRound = {true}
                    title = {EAirlines.redWings}
                    isInCurtain = {props.isInCurtain}
                    isChecked = {settings.companies.includes(EAirlines.redWings)}
                    onChangeEvent={() => {
                        dispatch(toggleCompany(EAirlines.redWings));
                    }}
                />
                <CheckboxCustom
                    id = {17}
                    isRound = {true}
                    title = {EAirlines.s7}
                    isInCurtain = {props.isInCurtain}
                    isChecked = {settings.companies.includes(EAirlines.s7)}
                    onChangeEvent={() => {
                        dispatch(toggleCompany(EAirlines.s7));
                    }}
                />
            </ParametersPanel>
        </div>
    )
}
  
export default OptionsGroup