import { Suspense, useEffect, useState, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router';
import ApodItemDisplay from '../components/ApodDisplay';
import { getJSONForDate } from '../controller';
import type { ApodItem } from '../db';
import { isValidISODate } from '../utils';
import Logger from 'js-logger';

export type DateParams = {
  date: string;
};

function APOD() {
  const [apod, setApod] = useState<ApodItem | null>(null);
  const params = useParams<DateParams>();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const isValidDate = isValidISODate(params.date ?? '');

    if (!isValidDate) navigate('/');
    else {
      startTransition(async () => {
        Logger.info('APOD start transistion', params);
        const data = await getJSONForDate(params.date ?? '');

        if (data) {
          Logger.info('APOD start transistion 2', data);
          setApod(data);
        }
      });
    }
  }, [params]);

  if (isPending) {
    Logger.info('APOD 3');
    return <div className="flex flex-1">loading apod data</div>;
  }

  if (apod !== null) {
    Logger.info('APOD 4');
    return <ApodItemDisplay apod={apod} />;
  }

  Logger.info('APOD 5');
  return null;
}

export default function ApodImpl() {
  return (
    <Suspense fallback={<div>Loadings</div>}>
      <APOD />
    </Suspense>
  );
}
