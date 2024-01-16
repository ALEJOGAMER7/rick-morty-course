export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharecters = () => {
        setCharacters(null);
    }
  return (
    <div className="charactrs">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharecters}>Volver a la home</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                <spam className="alive" />
                                Alive
                                </>
                            ) : (
                                <>
                                <spam className="dead"/>
                                </>
                            )}
                        </h6>
                        <p className="text-grey"><span>Episodios: </span>
                        <spam>{character.episode.length}</spam>
                        </p>
                        <p>
                            <spam className="text-grey">Especie: </spam>
                            <spam>{character.species}</spam>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <spam className="back-home" onClick={resetCharecters}>Volver a la Home</spam>
    </div>
  );
}
