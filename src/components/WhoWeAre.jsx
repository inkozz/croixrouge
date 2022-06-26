const WhoWeAre = () => (
  <div className="flex justify-center">
    <div>
      <div className="persoh rounded-2xl pt-2">
        <h1 className="text-4xl  mb-8">
          La Croix-Rouge Jeunesse : une Organisation de Jeunesse
        </h1>
        <p>
          La Croix-Rouge Jeunesse (CRJ) est une asbl reconnue comme organisation de
          Jeunesse par la Fédération Wallonie-Bruxelles depuis 1981. Notre mission est
          d’accompagner, soutenir et stimuler les jeunes à devenir des CRACS (Citoyens
          Responsables, Actifs, Critiques et Solidaires), tout en valorisant leur
          potentiel comme acteur de changement. Notre statut en tant qu’organisation de
          Jeunesse nous pousse à ce que notre action participe, de quelque manière que ce
          soit, à l’émancipation des jeunes et à la réalisation d’activités et actions qui
          :
        </p>
        <ul>
          <li className="flex pt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Permettent à des jeunes de tous horizons et cultures d’échanger et de se
            rencontrer.
          </li>
          <li className="flex pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            S’inscrivent dans une démarche d’éducation permanente.
          </li>
          <li className="flex pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Proposent aux jeunes un lieu de réflexion, un laboratoire d’expériences où ils
            ont une capacité d’action.
          </li>
          <li className="flex pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Mettent le jeune au cœur de l’action.
          </li>
        </ul>
        <p className="mt-4 mb-4">
          Nos instances de gouvernance reflètent le rôle essentiel des jeunes dans notre
          organisation. En effet, deux-tiers des membres du Conseil d’Administration ont
          moins de 35 ans afin de garantir leur participation à la prise de décision.
        </p>
        <p className="mb-4">
          A la tête de notre Conseil d’Administration, nous avons M. Fréderic Wirtz en
          tant que Président ainsi que M. Julien Carlier Vice-Président.
        </p>
        <p>
          En savoir davantage ? N’hésitez pas à lire{' '}
          <span className="cursor-pointer italic text-red-600">
            nos rapports d’activités.
          </span>
        </p>
      </div>
    </div>
  </div>
);
export default WhoWeAre;
