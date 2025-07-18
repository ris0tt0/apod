import React from 'react';
import { LinkStyled } from '../styled';
import { styled } from '@mui/material';

const AboutRouteContainer = styled('div')`
  padding: 20px;
`;

export const AboutRoute = () => {
  return (
    <AboutRouteContainer>
      <h1>Astronomy Picture of the day</h1>
      <p>
        The Astronomy Picture of the Day (APOD) is a single-page application
        built to explore space through NASA`s Open APIs. This app allows users
        to browse the daily Astronomy Picture of the Day provided by NASA,
        offering a unique and educational look at our universe.
      </p>
      <p>
        You can select any date using the calendar, then click Select to view
        the APOD for that day — including its title, description, and
        high-resolution image or video.
      </p>
      <p>
        This project is built with React.js, using Axios for handling API
        requests, and IndexedDB for local caching and offline access. The result
        is a fast, responsive experience that brings the cosmos closer with just
        a few clicks.
        <br />
        <LinkStyled to="https://github.com/ris0tt0/apod">
          View the source code on GitHub
        </LinkStyled>
      </p>
      <h2>A Personal Note</h2>
      <p>
        I'm a lifelong space nerd. One of my earliest and most vivid memories is
        seeing Halley's Comet through a reflecting telescope my father bought
        for me as a child. That moment sparked a lifelong fascination with
        astronomy — and this project is a small way of staying connected to that
        sense of wonder.
      </p>
    </AboutRouteContainer>
  );
};
