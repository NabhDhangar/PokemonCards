export const PokemonCards=({currElem})=>{
    return(
        <li className="pokemon-card">
            <figure>
                <img
                    src={currElem.sprites.other.dream_world.front_default}
                    alt={currElem.name}
                    className="pokemon-image"
                />
            </figure>
            <h1>{currElem.name}</h1>
            <div className="pokemon-info pokemon-highlight">
                <p>
                    {
                        currElem.types.map((currtype)=>currtype.type.name).join(", ")
                    }
                </p>
            </div>
            <div className="grid-three-cols">
                <p className="pokemon-info">
                    Height: <span>{currElem.height}</span>
                </p>
                <p className="pokemon-info">
                    Weight: <span>{currElem.weight}</span>
                </p>
                <p className="pokemon-info">
                    Speed: <span>{currElem.stats[5].base_stat}</span>
                </p>
                <p className="pokemon-info">
                    Experience: <span>{currElem.base_experience}</span>
                </p>
                <p className="pokemon-info">
                    Attack: <span>{currElem.stats[1].base_stat}</span>
                </p>
                <p className="pokemon-info">
                    Abiity: 
                    <span>{
                        currElem.abilities.map((abilityInfo)=>
                            abilityInfo.ability.name).slice(0,1).join(", ")
                    }</span>
                </p>
            </div>
        </li>
    )
}