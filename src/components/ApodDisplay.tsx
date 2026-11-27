import parse, { attributesToProps, domToReact } from 'html-react-parser';
import type { ApodItem } from '../db';

const options = {
  replace: (domNode: any) => {
    if (domNode.type !== 'tag') return;

    const props = attributesToProps(domNode.attribs);

    switch (domNode.name) {
      case 'a':
        return (
          <a
            {...props}
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            {domToReact(domNode.children, options)}
          </a>
        );
      default:
        return;
    }
  },
};

export default function ApodItemDisplay({ apod }: { apod: ApodItem }) {
  return (
    <div className="flex flex-1 flex-col py-2">
      <h2 className="text-3xl font-bold">{apod.title}</h2>
      <img
        src={apod.hdurl}
        alt={apod.alt}
        className="my-4 rounded-lg shadow-md"
      />
      <p>{parse(apod.explanation ?? '', options)}</p>
      <p>{parse(apod.copyright ?? '', options)}</p>
    </div>
  );
}
