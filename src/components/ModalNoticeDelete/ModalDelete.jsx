import { useTranslation } from 'react-i18next';
import { Wrapper, Title, Button, WrapperBtn } from './ModalDelete.style';

export const ModalDelete = ({ onToggleModal, deleteId, deletePet }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('delete_info_text')}</Title>
      <WrapperBtn>
        <Button
          onClick={() => {
            deletePet(deleteId);
            onToggleModal();
          }}
        >
          {t('Delete')}
        </Button>
        <Button onClick={e => onToggleModal(e)}>Cancel</Button>
      </WrapperBtn>
    </Wrapper>
  );
};
