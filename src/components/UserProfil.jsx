import ListBoite from './categorie/ListBoite';

const UserProfil = () => (
  <div className="mt-10">
    <div className="  userProfilDiv mt-5 flex shadow-md rounded-md overflow-hidden">
      <div className="flex flex-col  w-1/3 items-center back">
        <img
          src="https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png.webp"
          alt=""
          className=" w-52 mt-5"
        />
        <span className=" text-white text-4xl mt-8">Last name</span>
        <span className=" text-white text-4xl mt-8">First name</span>
      </div>
      <div className=" w-2/3 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute right-4 top-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        <span className=" text-2xl ml-10">
          Votre identifiant : <span className=" text-red-700 font-bold">09854468</span>
        </span>
        <ul className=" ml-14 mt-10 navli">
          <li>Établissement Scolaire : ...</li>
          <li>Numéro de l&apos;établissement : ...</li>
          <li>Poste : ...</li>
          <li>Année scolaire : ...</li>
          <li>Classe(s) : ...</li>
          <li>Tranche d&apos;âge : ...</li>
          <li>Numéro personnel : ...</li>
          <li>Info supplementaire : ...</li>
        </ul>
      </div>
    </div>
    <div className="userProfilDiv mt-5 shadow-md rounded-md">
      <span className=" text-4xl ml-5 mt-60">Vos services</span>
      <div className="flex flex-wrap">
        <ListBoite
          name="formation 1"
          description="Nom de la formation"
          image="{form.image}"
          age="15"
          temps="100"
        />
        <ListBoite
          name="formation 1"
          description="Nom de la formation"
          image="{form.image}"
          age="15"
          temps="100"
        />
        <ListBoite
          name="formation 1"
          description="Nom de la formation"
          image="{form.image}"
          age="15"
          temps="100"
        />
      </div>
    </div>
  </div>
);

export default UserProfil;
