const PostPeople = ({ name, role, region, photo }) => (
  <div className="p-2 zoom">
    <div className="p-6 text-left rounded-full relative taillered">
      <div className="flex flex-col  items-ba justify-center items-center">
        <img src={photo} alt="" className="h-32 w-32 rounded-full object-cover" />
        <h1 className="text-xl font-bold p-2">{name}</h1>
        <p className="text-md">{role}</p>
        <span className="flex items-center bg-red-600 top-3 text-white p-2 mt-4 rounded-xl text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {region}
        </span>
      </div>
    </div>
  </div>
);

export default PostPeople;
