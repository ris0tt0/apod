export default function Home() {
  return (
    <main className="flex-1">
      <section>
        <p className="py-2">
          The Astronomy Picture of the Day (APOD) is a single-page application
          built to explore space through NASA`s Open APIs. This app allows users
          to browse the daily Astronomy Picture of the Day provided by NASA,
          offering a unique and educational look at our universe.
        </p>
        <p className="py-2">
          You can select any date using the calendar, then click Select to view
          the APOD for that day — including its title, description, and
          high-resolution image or video.
        </p>
        <p className="py-2">
          This project is built with React.js, using Axios for handling API
          requests, and IndexedDB for local caching and offline access. The
          result is a fast, responsive experience that brings the cosmos closer
          with just a few clicks.
        </p>
        <p>
          <a
            href="https://github.com/ris0tt0/apod"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            View the source code on GitHub
          </a>
        </p>
        <h2 className="py-2 text-2xl font-bold">A Personal Note</h2>
        <p>
          I'm a lifelong space nerd. One of my earliest and most vivid memories
          is seeing Halley's Comet through a reflecting telescope my father
          bought for me as a child. That moment sparked a lifelong fascination
          with astronomy — and this project is a small way of staying connected
          to that sense of wonder.
        </p>
      </section>
    </main>
  );
}
