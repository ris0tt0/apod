import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { DateControls } from '../components/date';
import { styled } from '@mui/material';
import { LinkStyled } from '../styled';

const RootContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
  }

  main {
    max-width: 800px;
  }

  footer {
    max-width: 800px;
  }
`;

export const RootRoute: FC = () => {
  return (
    <RootContainer>
      <div>
        <header>
          <h1>Astronomy Picture of the Day</h1>
        </header>
        <main>
          <DateControls />
          <Outlet />
        </main>
        <footer>
          <p>
            <LinkStyled to="mailto:j@jonathangee.com">
              &copy; Jonathan Gee
            </LinkStyled>
          </p>
        </footer>
      </div>
    </RootContainer>
  );
};
