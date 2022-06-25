import ListBoite from './ListBoite';

const Boite = () => {
  const formation = [
    {
      id: 1,
      name: 'Chantons pour éviter les dangers',
      age: 'Maternelles',
      temps: '40 min.',
    },
    {
      id: 2,
      name: 'Ma sécurité à l’école',
      age: 'Maternelles',
      temps: '3 x 100 min.',
    },
    {
      id: 3,
      name: 'Boxes et roue de la jeunesse',
      age: 'Maternelles',
      temps: '2 x 50 min.',
    },
    {
      id: 4,
      name: 'Un virus Kesako',
      age: 'Primaires',
      temps: '40 min.',
    },
    {
      id: 5,
      name: 'Les gestes barrières',
      age: 'Primaires',
      temps: '3 x 100 min.',
    },
    {
      id: 6,
      name: 'Histoire de malades',
      age: 'Primaires',
      temps: '2 x 50 min.',
    },
  ];

  return (
    <div>
      <h1 className="text-4xl m-6 text-center">Nos animations</h1>
      <div className="flex flex-wrap justify-center items-center">
        {formation.map((form) => (
          <ListBoite
            name={form.name}
            description={form.description}
            image={form.image}
            age={form.age}
            temps={form.temps}
          />
        ))}
      </div>
    </div>
  );
};

export default Boite;
