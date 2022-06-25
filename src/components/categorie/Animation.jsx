import ListAnim from './ListAnim';

const Animation = () => {
  const anim = [
    {
      id: 1,
      name: 'Ma Sécurité à la Maison',
      description:
        'Composé de cinq panneaux aimantés représentant les espaces de la maison, cet outil ludique et interactif permet de sensibiliser les enfants à la sécurité domestique. Ils apprennent à repérer et à éviter les objets ou comportements dangereux, de manière à préserver leur sécurité.',
      image:
        'https://www.crj.be/wp-content/uploads/2020/07/ma-se%CC%81curite%CC%81-a%CC%80-la-maison-paysage.jpg',
      age: 'De 4 à 6 ans',
      temps: '2 x 50 min.',
    },
    {
      id: 2,
      name: 'Mission Zéro Bobo      ',
      description:
        'Les enfants ont pour mission d’explorer les différentes pièces d’une Maison Croix-Rouge. Ils y rencontrent des volontaires, découvrent les actions menées par la Croix-Rouge et acquièrent également les bons réflexes de prévention et d’action face à certains types d’accidents. A la suite de l’animation, les enfants repartent avec des objets pour prolonger leur apprentissage et sensibiliser leur entourage.',
      image: 'https://www.crj.be/wp-content/uploads/2019/10/outils2.jpg',
      age: 'De 6 à 10 ans',
      temps: '3 x 100 min.',
    },
    {
      id: 3,
      name: 'Boxes et roue de la jeunesse      ',
      description:
        'Cette sensibilisation présentée sous forme de boites surprises est une combinaison modulable traitant les différentes thématiques abordées par la Croix-Rouge de Belgique : l’action sociale, l’éducation à la citoyenneté mondiale, le don du sang… Cet outil est adaptable à un public élargi (et facilement utilisable lors des foires, salons, fancy fair, portes ouvertes…).',
      image: 'https://www.crj.be/wp-content/uploads/2021/11/outils5full.jpg',
      age: 'A partir de 8 ans',
      temps: '2 x 50 min.',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl m-6 text-center">Nos animations</h1>
      <div className="flex flex-wrap justify-center items-center">
        {anim.map((anims) => (
          <ListAnim
            name={anims.name}
            description={anims.description}
            image={anims.image}
            age={anims.age}
            temps={anims.temps}
          />
        ))}
      </div>
    </div>
  );
};

export default Animation;
