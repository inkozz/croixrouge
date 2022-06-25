const PostActu = ({ name, description, date, image }) => (
  <div className="p-10 flex animeservice">
    <div className="text-left relative taillered pt-6 bg-white rounded-2xl drop-shadow-2xl">
      <div className=" flex pb-4 justify-center items-center">
        <img src={image} alt="" className="h-44 w-44 rounded-full p-4" />
        <h1 className="text-3xl font-semibold">{name}</h1>
      </div>
      <div className="p-6 back rounded-b-xl">
        <p className="text-sm text-white">{description}</p>
      </div>
      <span className=" absolute right-0 back top-3 text-white p-4 rounded-l-xl text-xs">
        {date}
      </span>
    </div>
  </div>
);

export default PostActu;
