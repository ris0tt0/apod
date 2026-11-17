import Logger from 'js-logger';
import parse from 'html-react-parser';
import { useEffect, useState, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getJSONForDate } from '../controller';
import { isValidISODate } from '../utils';
import type { ApodItem } from '../db';

type DateParams = {
  date: string;
};

export const ApodItemDisplay = ({ apod }: { apod: ApodItem }) => {
  Logger.info('ApodItemDIsplay', apod);
  return (
    <div className="flex flex-1 flex-col">
      <h2>{apod.title}</h2>
      <p>{parse(apod.explanation ?? '')}</p>
    </div>
  );
};

export default function APOD() {
  const [apod, setApod] = useState<ApodItem | null>(null);
  const params = useParams<DateParams>();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  Logger.info('APOD', params);

  useEffect(() => {
    const isValidDate = isValidISODate(params.date ?? '');

    if (!isValidDate) navigate('/');
    else {
      startTransition(async () => {
        const data = await getJSONForDate(params.date ?? '');
        if (data) {
          setApod(data);
        }
      });
    }
  }, [params]);

  if (isPending) {
    return <div className="flex flex-1">loading apod data</div>;
  }

  if (apod !== null) return <ApodItemDisplay apod={apod} />;

  return null;
}
