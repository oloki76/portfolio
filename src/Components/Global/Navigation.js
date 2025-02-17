import React from 'react';
import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { Close } from '@styled-icons/ionicons-sharp/Close';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useQuery from '../../Hooks/useQuery';

const Navigation = ({ mode, onToggleMode }) => {
  const [queryName] = useQuery();
  const [open, setOpen] = React.useState(false);

  const onClickBurgur = () => {
    if (window.innerWidth <= 768) {
      setOpen(!open);
      document.body.parentElement.style.overflowY = open ? 'scroll' : 'hidden';
    }
  };

  const onClickNavItem = () => {
    if (window.innerWidth <= 768) {
      setOpen(!open);
      document.body.parentElement.style.overflowY = open ? 'scroll' : 'hidden';
    }
  };

  // const handleNavState = () => {
  //   window.innerWidth === 768 && open && setOpen(false);
  // };

  // React.useEffect(() => {
  //   window.addEventListener('resize', handleNavState);
  //   return () => window.removeEventListener('resize', handleNavState);
  // });

  return (
    <StNavWrapper>
      <StNavigation open={open} setOpen={setOpen}>
        <StNavItem>
          <HashLink smooth to="/#home" onClick={onClickNavItem}>
            HOME
          </HashLink>
        </StNavItem>
        <StNavItem>
          <HashLink smooth to="/#about" onClick={onClickNavItem}>
            ABOUT
          </HashLink>
        </StNavItem>
        <StNavItem>
          {queryName ? (
            <Link to="/project" onClick={onClickNavItem}>
              PROJECT
            </Link>
          ) : (
            <HashLink smooth to="/#project" onClick={onClickNavItem}>
              PROJECT
            </HashLink>
          )}
        </StNavItem>
        <StNavItem>
          <HashLink smooth to="/#contact" onClick={onClickNavItem}>
            CONTACT
          </HashLink>
        </StNavItem>
        <StNavItem>
          <StToggleModeButton onClick={onToggleMode}>
            {mode === 'light' ? 'DARK' : 'LIGHT'}
          </StToggleModeButton>
        </StNavItem>
      </StNavigation>
      <StBurgur onClick={onClickBurgur}>
        {open ? <StCloseIcon /> : <StMenuIcon />}
      </StBurgur>
    </StNavWrapper>
  );
};

const StNavWrapper = styled.nav`
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    width: 100%;
  }
`;

const StNavigation = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 3rem;
  font-size: 3rem;
  font-weight: 900;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    font-size: 2.5rem;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    column-gap: 1.5rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 5rem;
  }
`;

const StNavItem = styled.li`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
  &:last-child {
    display: none;
    /* mobile */
    @media ${({ theme }) => theme.mobile} {
      display: block;
    }
  }

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    & + & {
      margin-top: 1.5rem;
    }
  }
`;

const StToggleModeButton = styled.button`
  color: ${({ theme }) => theme.fontColor};
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

const StBurgur = styled.button`
  display: none;
  color: ${({ theme }) => theme.fontColor};

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    display: block;
    padding: 1rem;
    width: 5.5rem;
    height: 5.5rem;
  }

  /* phone */
  @media ${({ theme }) => theme.phone} {
    width: 4rem;
    height: 4rem;
    padding: 0.5rem;
  }
`;

const StMenuIcon = styled(Menu)`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

const StCloseIcon = styled(Close)`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

export default Navigation;
