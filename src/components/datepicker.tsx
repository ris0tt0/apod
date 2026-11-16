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
      // action={dateValue}
      method="post"
      className="flex flex-col border border-amber-400"
    >
      <label htmlFor="start">APOD Date:</label>
      <div>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={dateValue}
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
