import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { DateParams } from '../pages/apod';
import { getISOToday } from '../utils';

export default function DatePicker() {
  const params = useParams<DateParams>();

  const today = params.date ?? getISOToday();
  const navigate = useNavigate();
  const [dateValue, setDateValue] = useState(today);

  const handleOnSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    navigate(dateValue);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      method="post"
      className="flex flex-col py-2"
    >
      <div className="flex items-baseline justify-center">
        <label htmlFor="start" className="block px-3 font-medium text-gray-900">
          APOD Date:
        </label>
        <input
          type="date"
          id="start"
          name="trip-start"
          className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          value={dateValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDateValue(e.target.value);
          }}
        />
        <div className="px-2">
          <input
            className="border rounded-lg border-gray-300 p-1 bg-slate-100  hover:ring-blue-500 hover:outline-blue-500 hover:outline-2"
            type="submit"
            value="Load APOD"
          />
        </div>
      </div>
    </form>
  );
}
