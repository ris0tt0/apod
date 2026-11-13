import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './home';
import APOD from './apod';
import { useState } from 'react';
import { getISOToday } from './utils';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: ':date',
    element: <APOD />,
  },
]);

function DatePicker() {
  const today = getISOToday();
  const [dateValue, setDateValue] = useState(today);
  return (
    <form className="flex flex-col border border-amber-400">
      <label htmlFor="start">APOD Date:</label>
      <div>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={dateValue}
          min="2018-01-01"
          max="2018-12-31"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDateValue(e.target.value);
          }}
        />
      </div>
      <div>
        <input type="submit" value="Send Request" />
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="h-dvh flex flex-col">
      <header>
        <h1 className="text-5xl font-bold justify-center flex">
          Astronomy Picture of the Day
        </h1>
        <DatePicker />
      </header>
      <RouterProvider router={router} />
      <footer>this is the footer</footer>
    </div>
  );
}

export default App;
