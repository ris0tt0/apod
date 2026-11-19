import { Outlet } from 'react-router';
import DatePicker from '../components/DatePicker';

export default function LandingPage() {
  return (
    <div className=" h-dvh flex flex-col p-3">
      <header>
        <h1 className="bg-slate-200 py-2 text-5xl font-bold justify-center flex">
          Astronomy Picture of the Day
        </h1>
        <DatePicker />
      </header>
      <Outlet />
      <footer className=" bg-slate-200 p-2">
        <p>
          &copy; 2026 Jonathan Gee. All rights reserved. Contact:{' '}
          <a href="mailto:j@jonathangee.com" className="underline">
            j@jonathangee.com
          </a>
        </p>
        <p>
          Image &amp; Data Credit:{' '}
          <span id="apod-copyright">Public Domain / NASA</span>
        </p>
        <p>
          Powered by
          <a
            href="https://api.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            {' '}
            NASA Open APIs{' '}
          </a>
          via the{' '}
          <a href="https://nasa.gov" target="_blank" rel="noopener noreferrer">
            Astronomy Picture of the Day (APOD)
          </a>
          .
        </p>
        <p>
          <small>
            Note: Not affiliated with or endorsed by NASA. Review{' '}
            <a
              href="https://www.nasa.gov/nasa-brand-center/images-and-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
            >
              NASA Media Guidelines
            </a>{' '}
            before commercial reuse.
          </small>
        </p>
      </footer>
    </div>
  );
}
