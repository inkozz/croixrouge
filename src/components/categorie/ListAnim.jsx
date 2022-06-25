const listAnim = ({ name, description, age, temps, image }) => (
  <div className="flex justify-center items-center w-auto mt-10">
    <div className="relative">
      <img
        src={image}
        alt=""
        className="m-10 w-40 h-40 bg-red-600 rounded-full object-cover"
      />
      <div className="m-10 mt-4 test2">
        <h3 className="font-bold">{name}</h3>{' '}
        <div className="flex">
          {' '}
          <div className="flex items-center pt-2 pb-2 pr-2">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs pl-2">{age} </span>
          </div>
          <div className="flex items-center">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs pl-2">{temps} </span>
          </div>
        </div>
        <p className="text-sm">{description}</p>
        <button
          type="button"
          className="back rounded-md p-2 text-white mt-2 absolute bottom-0">
          Acheter
        </button>
      </div>
    </div>
  </div>
);
export default listAnim;
