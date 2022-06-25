import ListBoite from './ListBoite';

const Boite = () => {
  const formation = [
    {
      id: 1,
      name: 'Chantons pour éviter les dangers',
      age: 'maternelles',
      temps: '40 min.',
    },
    {
      id: 2,
      name: 'Ma sécurité à l’école',
      age: 'maternelles',
      temps: '3 x 100 min.',
    },
    {
      id: 3,
      name: 'Boxes et roue de la jeunesse      ',
      age: 'maternelles',
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
