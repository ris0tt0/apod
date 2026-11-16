import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { isValidISODate } from '../utils';

type DateParams = {
  date: string;
};

export default function APOD() {
  const params = useParams<DateParams>();
  const navigate = useNavigate();
  const isValidDate = isValidISODate(params.date ?? '');

  useEffect(() => {
    if (!isValidDate) navigate('/');
  }, [isValidDate]);

  return <div className="flex flex-1">This is the apod: {params.date}</div>;
}
