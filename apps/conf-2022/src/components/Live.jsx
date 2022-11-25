export const LiveSlice = ({ title, embed }) => {
  if (!embed) {
    return null;
  }

  return (
    <div className="relative pt-20">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10">
          <h1 className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl">
            {title}
          </h1>
        </div>
        <div className="overflow-hidden rounded-lg shadow aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src={embed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
