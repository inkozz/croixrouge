const ListBoite = ({ name, description, age, temps }) => (
  <div className="flex justify-center items-center w-auto mt-6">
    <div className="relative">
      <div className="m-10 mt-2 box-perso bg-white rounded-2xl drop-shadow-2xl">
        <h3 className="font-bold back p-4 rounded-t-xl text-white">{name}</h3>{' '}
        <div>
          <div className="flex items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm pl-2">{age} </span>
          </div>
          <div className="flex items-center pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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
            <span className="text-sm pl-2">{temps} </span>
          </div>
        </div>
        <p className="text-sm pl-4 pr-4">{description}</p>
        <button
          type="button"
          className="back rounded-md p-2 text-white mt-2 absolute bottom-4 right-4 ">
          Télécharger
        </button>
      </div>
    </div>
  </div>
);
export default ListBoite;
