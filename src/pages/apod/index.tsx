import { useEffect, useState, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router';
import ApodItemDisplay from '../../components/ApodDisplay';
import { getJSONForDate } from '../../controller';
import type { ApodItem } from '../../db';
import { isValidISODate } from '../../utils';

export type DateParams = {
  date: string;
};

function APODSkeleton() {
  return (
    <div
      role="status"
      className="flex flex-col p-4 rounded-lg shadow animate-pulse"
    >
      <div className="flex w-96 h-7 mb-4 bg-gray-300 rounded"></div>
      <div className="flex w-full h-96 mb-4 bg-gray-300 rounded"></div>

      <div className="h-2 bg-gray-200 rounded-full mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full max-w-82.5 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full w-32 max-w-75 mb-4"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function APOD() {
  const [apod, setApod] = useState<ApodItem | null>(null);
  const params = useParams<DateParams>();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

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
    return <APODSkeleton />;
  }

  if (apod !== null) {
    return <ApodItemDisplay apod={apod} />;
  }

  return null;
}
