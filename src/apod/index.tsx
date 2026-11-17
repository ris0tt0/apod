import Logger from 'js-logger';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import { useEffect, useState, useTransition } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getJSONForDate } from '../controller';
import { isValidISODate } from '../utils';
import type { ApodItem } from '../db';

type DateParams = {
  date: string;
};

const options = {
  replace: (domNode: any) => {
    if (domNode.type !== 'tag') return;

    const props = attributesToProps(domNode.attribs);

    switch (domNode.name) {
      case 'h1':
        return (
          <h1 {...props} className="text-3xl font-bold text-gray-900 mb-4">
            {domToReact(domNode.children, options)}
          </h1>
        );
      case 'p':
        return (
          <p
            {...props}
            className="text-base text-gray-700 leading-relaxed mb-4"
          >
            {domToReact(domNode.children, options)}
          </p>
        );
      case 'a':
        return (
          <a
            {...props}
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            {domToReact(domNode.children, options)}
          </a>
        );
      case 'ul':
        return (
          <ul {...props} className="list-disc pl-5 space-y-2 mb-4">
            {domToReact(domNode.children, options)}
          </ul>
        );
      default:
        return;
    }
  },
};

export const ApodItemDisplay = ({ apod }: { apod: ApodItem }) => {
  Logger.info('ApodItemDIsplay', apod);
  return (
    <div className="flex flex-1 flex-col">
      <h2 className="text-3xl font-bold">{apod.title}</h2>
      <img
        src={apod.hdurl}
        alt={apod.title}
        className="my-4 rounded-lg shadow-md"
      />
      <p>{parse(apod.explanation ?? '', options)}</p>
      <p>
        <strong>Copyright:</strong> {parse(apod.copyright ?? '', options)}
      </p>
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
