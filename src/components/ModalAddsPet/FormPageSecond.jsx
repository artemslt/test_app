import { useTranslation } from 'react-i18next';
import {
  Error,
  Label,
  AddImage,
  InputHidden,
  AddPhoto,
  TitleAddPhoto,
  ImgBox,
  Image,
  Comment,
  ButtonClose,
  CancelIcon,
  WrapperBtn,
  CommentTitle,
  Button,
} from './ModalAddsPet.styled';

export const FormePageSecond = ({
  setImgUrl,
  imgUrl,
  onClickToggle,
  setFile,
  formik,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <TitleAddPhoto> {t('Add_pet_notification')}</TitleAddPhoto>
      <Label>
        <AddImage className={!imgUrl ? 'Add_Image_show' : ''}>
          {!imgUrl && (
            <InputHidden
              type="file"
              name="photo"
              value={imgUrl ? imgUrl : ''}
              accept="image/png, image/jpeg"
            />
          )}
          <ImgBox className={imgUrl ? 'show_img' : ''}>
            <Image src={imgUrl} alt="" />
          </ImgBox>
          <AddPhoto />
          <Error name="photo" component="p"></Error>
        </AddImage>

        <ButtonClose
          type="button"
          onClick={() => {
            setImgUrl(null);
            setFile(null);
          }}
          className={imgUrl ? 'button_closse__show' : ''}
        >
          <CancelIcon />
        </ButtonClose>
      </Label>

      <Label htmlFor="">
        <CommentTitle> {t('Comments')}</CommentTitle>
        <Comment
          component="textarea"
          name="comment"
          placeholder={t('Comments_p')}
        />
        <Error name="comment" component="p"></Error>
      </Label>
      <WrapperBtn>
        <Button type="submit">{t('Submit')}</Button>
        <Button
          type="button"
          onClick={() => onClickToggle(true)}
          name="back"
          disabled={!(formik.dirty && formik.isValid)}
        >
          {t('Back')}
        </Button>
      </WrapperBtn>
    </>
  );
};
