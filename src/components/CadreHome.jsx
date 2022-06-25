const CadreHome = () => (
  <div className="p-10 flex animecadrehome">
    <div className="text-left relative taillehome pt-6  bg-white rounded-2xl drop-shadow-2xl">
      <div className=" flex pb-4 justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlp2Ea0UiLFOdZ5ZfoyeupbxtPY8cQjDAmA&usqp=CAU"
          alt=""
          className="h-32 w-32 rounded-full p-4"
        />

        <h1 className="text-xl font-semibold  ">La CRJ collabore avec l’ASBL HITW</h1>
      </div>
      <div className="p-6 back rounded-b-xl">
        <p className="text-xs text-white mb-4">
          La Croix-Rouge Jeunesse de Belgique a l’honneur de collaborer avec Hack In The
          Wood, qui est le premier festival pour les développeurs où ils ont l’occasion de
          pouvoir trouver des solutions à quelques problématiques digitales amenées [...]
        </p>

        <a
          href="/actualite"
          className="bg-white rounded-lg text-xs p-2 hover:animate-pulse ">
          Voir plus
        </a>
      </div>
      <span className=" absolute right-0 back top-3 text-white p-2 rounded-l-xl text-xs">
        24 Juin 2022
      </span>
    </div>
  </div>
);

export default CadreHome;
