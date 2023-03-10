import { useDispatch } from 'react-redux';
import { components } from 'react-select';
import {
  ButtonRemoveSelect,
  NoOptionsMessageSpan,
  BreedInputWrapper,
} from './ModalAddsPet.styled';
import { onInput } from 'redux/InputPets/inputPetsSlice';
import { useTranslation } from 'react-i18next';
export const NoOptionsMessage = props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <components.NoOptionsMessage {...props}>
        <BreedInputWrapper>

      <NoOptionsMessageSpan className="custom-css-class">
        {t('No_breed')}
      </NoOptionsMessageSpan>
      <ButtonRemoveSelect onClick={() => dispatch(onInput())}>
        {t('Write_by_hand')}
      </ButtonRemoveSelect>
        </BreedInputWrapper>
    </components.NoOptionsMessage>
  );
};
