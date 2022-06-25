const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ok');
  };
  const resetForm = (e) => {
    e.preventDefault();
    console.log('resetForm');
  };
  return (
    <div className="flex flex-row justify-between items-center p-8 w-full" id="googleMap">
      <form className="bg-white m-8 shadow-2xl p-8" onSubmit={handleSubmit}>
        <h1 className="mb-8  flex items-center text-3xl">Contactez nous</h1>
        <div className="flex items-center">
          <label htmlFor="name">
            <input
              className=" p-2 border border-red-500 focus:outline-2 outline-red-500 inputStyle mr-4"
              type="text"
              placeholder="Nom"
            />
          </label>
          <label htmlFor="surname">
            <input
              className=" p-2 border border-red-500 focus:outline-2 outline-red-500 inputStyle"
              type="text"
              placeholder="Prénom"
            />
          </label>
        </div>
        <div className="flex flex-col items-start mt-8">
          <label htmlFor="location">
            <select
              className="mb-8 p-2 border border-red-500 outline-red-500 inputStyle mr-2"
              name="location"
              id="location">
              <option value="" disabled selected>
                Choisissez votre région
              </option>
              <option value="hainaut">Hainaut</option>
              <option value="liege">Liège</option>
              <option value="namur">Namur</option>
              <option value="bruxelles">Bruxelles</option>
            </select>{' '}
            <label htmlFor="email">
              <input
                className="p-2 w-64 border border-red-500 focus:outline-2 outline-red-500 inputStyle"
                type="email"
                placeholder="Votre adresse e-mail"
              />
            </label>
          </label>
        </div>
        <div className="mx-auto">
          <label htmlFor="message">
            <textarea
              className="mt-4  border border-red-500  outline-red-500 w-full"
              name="message"
              id="message"
              cols="60"
              rows="10"
              placeholder="Tapez votre message..."
            />
          </label>
          <div className="flex justify-around">
            <button
              type="submit"
              label="btn"
              className="hover:bg-white p-4 hover:text-red-600 border-2  border-red-600 hover:border-red-600 m-6 rounded-2xl flex justify-center items-center bg-red-600 text-white">
              Envoyer
            </button>
            <button
              type="submit"
              onClick={resetForm}
              label="btn"
              className="hover:bg-white p-4 hover:text-red-600 border-2  border-red-600 hover:border-red-600 m-6 rounded-2xl flex justify-center items-center bg-red-600 text-white">
              Annuler
            </button>
          </div>
        </div>
      </form>
      <iframe
        id="googleMap"
        title="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40314.28456909228!2d4.327099163437576!3d50.83778021395858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c389ab405c0f%3A0xf2784e0a4f8e6f18!2sCroix-Rouge%20de%20Belgique%20-%20Section%20Locale%20de%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1656115644338!5m2!1sfr!2sbe"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Contact;
