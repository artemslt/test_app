import { useTranslation } from 'react-i18next';
import { LinkFull, UserNavContainer } from './UserNav.styled';

export const UserNav = ({ setOpen }) => {
  const { t } = useTranslation();
  return (
    <UserNavContainer>
      <LinkFull to="/user" onClick={() => setOpen(false)}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9997 2.33337C7.55967 2.33337 2.33301 7.56004 2.33301 14C2.33301 20.44 7.55967 25.6667 13.9997 25.6667C20.4397 25.6667 25.6663 20.44 25.6663 14C25.6663 7.56004 20.4397 2.33337 13.9997 2.33337ZM13.9997 7.00004C16.2513 7.00004 18.083 8.83171 18.083 11.0834C18.083 13.335 16.2513 15.1667 13.9997 15.1667C11.748 15.1667 9.91634 13.335 9.91634 11.0834C9.91634 8.83171 11.748 7.00004 13.9997 7.00004ZM13.9997 23.3334C11.6313 23.3334 8.83134 22.3767 6.83634 19.9734C8.87988 18.37 11.4022 17.4986 13.9997 17.4986C16.5971 17.4986 19.1195 18.37 21.163 19.9734C19.168 22.3767 16.368 23.3334 13.9997 23.3334Z"
            fill="white"
          />
        </svg>
        {t('Account')}
      </LinkFull>
    </UserNavContainer>
  );
};
