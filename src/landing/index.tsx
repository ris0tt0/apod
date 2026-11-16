import { Outlet } from 'react-router';
import DatePicker from '../components/datepicker';

export default function LandingPage() {
  return (
    <div className="h-dvh flex flex-col">
      <header>
        <h1 className="text-5xl font-bold justify-center flex">
          Astronomy Picture of the Day
        </h1>
        <DatePicker />
      </header>
      <Outlet />
      <footer>this is the footer</footer>
    </div>
  );
}
