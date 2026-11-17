import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getISOToday } from '../utils';
import Logger from 'js-logger';

export default function DatePicker() {
  const today = getISOToday();
  const navigate = useNavigate();
  const [dateValue, setDateValue] = useState(today);

  const handleOnSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    Logger.info('onsubmut', dateValue);
    navigate(dateValue);
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      method="post"
      className="flex flex-col  py-2"
    >
      <p>here we explain that you have to pick the date</p>
      <div className="flex items-baseline justify-center">
        <label
          htmlFor="start"
          className="block px-3 text-sm font-medium text-gray-900"
        >
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
      </div>
      <div>
        <input
          className="border border-slate-600 p-2 bg-slate-100 rounded-2xl"
          type="submit"
          value="Send Request"
        />
      </div>
    </form>
  );
}
