import PostActu from './PostActu';

const Actualite = () => {
  const actu = [
    {
      id: 1,
      name: 'La CRJ collabore avec l’ASBL HITW',
      description:
        'La Croix-Rouge Jeunesse de Belgique a l’honneur de collaborer avec Hack In The Wood, qui est le premier festival pour les développeurs où ils ont l’occasion de pouvoir trouver des solutions à quelques problématiques digitales amenées par les porteurs de projets. Pour en savoir plus, cliquez juste en dessous et découvrez ce que la croix rouge jeunesse recherche et aimerait améliorer pour l’avenir',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlp2Ea0UiLFOdZ5ZfoyeupbxtPY8cQjDAmA&usqp=CAU',
      date: '24 Juin 2022',
    },
    {
      id: 2,
      name: 'Initiative originale de l’école d’Izel',
      description:
        'Suite à une animation et afin d’en faire profiter leurs familles, les différentes thématiques du Benjamin-Secouriste ont été mises en musique sous forme de scénettes par les élèves de 5ième année primaire lors de leur fête d’école, en mai 2022. Et cela, sous le regard attentif de leur animatrice Marianne. Toutes nos félicitations aux talentueux élèves !',
      image:
        'https://resize.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/sante/asthme/asthme-chez-l-enfant/all-asthme-ecole-13/359950-2-fre-FR/all-asthme-ecole-13.jpg',
      date: '20 Mai 2022',
    },
    {
      id: 3,
      name: 'Saint-Nicolas aidé par des écoliers',
      description:
        'Saint Nicolas doit faire plaisir à beaucoup d’enfants mais certains reçoivent peu ou pas de cadeaux au mois de décembre. Heureusement, des petits lutins se mobilisent avec l’aide de la Croix-Rouge pour n’oublier personne. Ainsi, à l’école libre de Bourcy, les élèves en ont parlé autour d’eux et ont récolté des jouets',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUVFZsm8Xe4ubiLNjrufMrivLpijHPXnMag&usqp=CAU',
      date: '6 Décembre 2022',
    },
    {
      name: 'L’école de la frontière donne son sang !',
      image:
        'https://www.crj.be/wp-content/uploads/2022/01/ecoleFrontiereLux-scaled1-e1643617982114-1536x1025.jpg',
      description:
        'Donner son sang sauve des vies ! Les élèves de l’école de la Frontière à Athus l’ont bien compris. Sensibilisés en classe grâce à leur enseignante et à la venue d’un volontaire spécialiste du sujet, les enfants, trop jeunes pour donner eux-mêmes leur sang, sont allés dans l’école secondaire voisine à la rencontre des élèves',
      id: 4,
      date: '24 Décembre 2022',
    },
  ];
  const listItems = actu.map((actus) => (
    <div>
      <PostActu
        name={actus.name}
        description={actus.description}
        image={actus.image}
        date={actus.date}
      />
    </div>
  ));
  return listItems;
};
export default Actualite;
