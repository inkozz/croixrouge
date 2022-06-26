import { useState } from 'react';
import PostPeople from './PostPeople';
import WhoWeAre from './WhoWeAre';

const AboutsUs = () => {
  const [isEquipeVisible, setIsEquipeVisible] = useState(false);
  const peoples = [
    {
      id: 1,
      name: 'Jennifer Verdin',
      role: 'Coordinatrice',
      photo: 'https://www.crj.be/wp-content/uploads/2019/10/IMG_2918-1-300x200.jpg',
      region: 'Brabant Wallon',
    },
    {
      id: 2,
      name: 'Myriam Lopez',
      role: 'Coordinatrice',
      photo:
        'https://www.crj.be/wp-content/uploads/2022/02/2017_07_29-Rassemblement-CRJ_223-002-3.jpg',
      region: 'Bruxelles-Capitale',
    },
    {
      id: 3,
      name: 'Geffrey Decarsin',
      role: 'Responsable projets école (Dispositif particulier)',
      photo: 'https://www.crj.be/wp-content/uploads/2019/10/IMG_2920-1-300x200.jpg',
      region: 'Hainaut',
    },
    {
      name: 'Carine Dupont',
      id: 4,
      photo: 'https://www.crj.be/wp-content/uploads/2019/10/IMG_2927-2-300x200.jpg',
      role: 'Coordinatrice',
      region: 'Hainaut',
    },
    {
      name: 'Sophie Kohler',
      id: 5,
      photo: 'https://www.crj.be/wp-content/uploads/2020/04/SophieK-300x200.jpg',
      role: 'Coordinatrice',
      region: 'Liège',
    },
    {
      name: 'Cathy Dahy',
      id: 6,
      photo: 'https://www.crj.be/wp-content/uploads/2020/04/Cathy-300x200.jpg',
      role: 'Responsable d’activités provinciales jeunesse ',
      region: 'Liège',
    },
    {
      name: 'Jody Dufour',
      id: 7,
      photo: 'https://www.crj.be/wp-content/uploads/2020/04/Jody-300x200.jpg',
      role: "Responsable d'activités provinciales jeunesse",
      region: 'Liège',
    },
    {
      name: 'Christine Welschen',
      id: 8,
      photo: 'https://www.crj.be/wp-content/uploads/2020/04/Christine-300x200.jpg',
      role: 'Coordinatrice',
      region: 'Luxembourg',
    },
    {
      name: 'Valérie Keymolen',
      id: 9,
      photo: 'https://www.crj.be/wp-content/uploads/2019/10/IMG_2923-1-300x200.jpg',
      role: 'Coordinatrice',
      region: 'Namur',
    },
    {
      name: 'Florence Craet',
      id: 10,
      photo: 'https://www.crj.be/wp-content/uploads/2022/02/Plan-de-travail-1-1.png',
      role: ' Coordinatrice de projet & communication',
      region: '',
    },
    {
      name: 'Isabelle Verbrugge',
      id: 11,
      photo: 'https://www.crj.be/wp-content/uploads/2020/02/Photo_Isa-1024x768.jpg',
      role: ' Coordinatrice de projet',
      region: '',
    },
    {
      name: 'Hélène Goffart',
      id: 12,
      photo: 'https://www.crj.be/wp-content/uploads/2021/09/helene-150x150.png',
      role: 'Détachée pédagogique',
      region: '',
    },
    {
      name: 'Anne Gason',
      id: 13,
      photo: 'https://www.crj.be/wp-content/uploads/2020/04/Anne-1-300x200.jpg',
      role: 'Assistante de direction',
      region: '',
    },
    {
      name: 'Laura Lopez Bech',
      id: 14,
      photo: 'https://www.crj.be/wp-content/uploads/2019/10/IMG_2931-300x200.jpg',
      role: 'Directrice Croix-Rouge Jeunesse',
      region: '',
    },
  ];
  return (
    <div className="mt-10 w-full">
      <div className="flex justify-center">
        <button
          className="hover:bg-white p-2 hover:text-red-600 border-2  border-red-700 hover:border-red-600 m-6 rounded-xl flex justify-center items-center bg-red-700 text-white"
          type="submit"
          onClick={() => setIsEquipeVisible(false)}>
          A propos de nous
        </button>
        <button
          className="hover:bg-white p-2 hover:text-red-600 border-2  border-red-700 hover:border-red-600 m-6 rounded-xl flex justify-center items-center bg-red-700 text-white"
          type="submit"
          onClick={() => setIsEquipeVisible(true)}>
          Notre équipe
        </button>
      </div>
      {isEquipeVisible ? (
        <div>
          <h1 className="text-4xl mt-8 text-center">Notre équipe</h1>
          <div className="flex flex-wrap justify-center w-full">
            {peoples.map((people) => (
              <PostPeople
                name={people.name}
                key={people.id}
                role={people.role}
                photo={people.photo}
                region={people.region}
              />
            ))}
          </div>
        </div>
      ) : (
        <WhoWeAre />
      )}
    </div>
  );
};

export default AboutsUs;
