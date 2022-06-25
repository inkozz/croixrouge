const Services = () => (
  <div>
    <h1 className="text-center text-4xl m-6 ">Que désirez-vous ?</h1>
    <a href="/animation" className="flex justify-center">
      <div className="mb-10 flex justify-center items-center bg-white rounded-2xl drop-shadow-2xl cursor-pointer taille">
        <h2 className="text-center text-3xl pr-10 pl-10 back h-full flex items-center text-white rounded-l-xl">
          Animations
        </h2>
        <p className="text-left rounded-xl p-6">
          C’est scientifiquement prouvé, plus on apprend tôt, plus on développe la
          capacité d’être résilient, de pouvoir rebondir face à un danger. Nous proposons
          des animations sensibilisant aux mesures de prévention et aux premiers soins
          spécialement conçues pour un jeune public, entre 3 et 12 ans. Nos équipes
          d’animateur·rices formé·es et passionné·es sont présentes dans les différentes
          provinces en Wallonie et à Bruxelles. Outre nos animateur·rices, nous misons
          également sur l’effet démultiplicateur de la formation du corps enseignant et
          d’autres acteurs de l’enseignement.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-120 w-120 pr-8 text-red-600 opacity-30"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      </div>
    </a>
    <a href="/" className="flex justify-center">
      <div className="mb-10 flex justify-center items-center bg-white rounded-2xl drop-shadow-2xl cursor-pointer taille">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-120 w-120 pl-8 text-red-600 opacity-30"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <p className="text-left rounded-xl p-6">
          C’est scientifiquement prouvé, plus on apprend tôt, plus on développe la
          capacité d’être résilient, de pouvoir rebondir face à un danger. Nous proposons
          des animations sensibilisant aux mesures de prévention et aux premiers soins
          spécialement conçues pour un jeune public, entre 3 et 12 ans. Nos équipes
          d’animateur·rices formé·es et passionné·es sont présentes dans les différentes
          provinces en Wallonie et à Bruxelles. Outre nos animateur·rices, nous misons
          également sur l’effet démultiplicateur de la formation du corps enseignant et
          d’autres acteurs de l’enseignement.
        </p>
        <h2 className="text-center text-3xl pr-10 pl-10 back h-full flex items-center text-white rounded-r-xl">
          Boîte du Professeur
        </h2>
      </div>
    </a>
  </div>
);

export default Services;
