import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';

const Footer = () => {
  return (
    <StFooter>
      <div>
        ©2021 Jay Kim All Rights Reserved. Web Front-end developer portfolio.
      </div>
      <div>
        <a
          href="https://github.com/keemtj"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StIcon />
        </a>
      </div>
    </StFooter>
  );
};

const StFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
  height: 10rem;
  font-size: 1.5rem;
`;

const StIcon = styled(Github)`
  width: 1.5rem;
  height: 1.5rem;
`;

export default Footer;
