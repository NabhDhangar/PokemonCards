import { useEffect, useState } from "react"
import "../useEffect/Pokemon.css"
import { PokemonCards } from "./PokemonCards";

export const Pokemon=()=>{
    const API = "https://pokeapi.co/api/v2/pokemon?limit=240";
    const[loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [pokemon,setPokemon]=useState([]);
    const[search,setSearch]=useState("");

    const fetchPokemon=async()=>{
        try{
            const res= await fetch(API)
            const data= await res.json()
            // console.log(data);

            const detailedPokemonData= data.results.map(
                async (currEle)=>{
                    // console.log(currEle.url)
                    const res2=await fetch(currEle.url)
                    const detailedData = await res2.json()
                    // console.log(detailedData)
                    return detailedData
                }
            )
            const detailedResponse= await Promise.all(detailedPokemonData)
            // console.log(detailedPokemonData)
            console.log(detailedResponse)

            setError(setPokemon(detailedResponse))
            setLoading(false)
        }catch(error){
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchPokemon();
    },[])

    //Search fxnality
    const searchData=pokemon.filter((currPok)=>
        currPok.name.toLowerCase().includes(search.toLowerCase())
    )

    if(loading) return<h1>Loading...</h1>
    if(error) return <h1>{error.message}</h1>

    return(
        <section className="container">
            <header><h1>Lets Catch Pokemon</h1></header>
            <div className="pokemon-search">
                <input 
                    type="text" 
                    placeholder="Search Pokemon"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div>
                <ul className="cards ">
                {/* pokemon.map((currElem)=>{ */}
                    {
                        searchData.map((currElem)=>{
                            return(
                                <PokemonCards currElem={currElem} key={currElem.id}/>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}