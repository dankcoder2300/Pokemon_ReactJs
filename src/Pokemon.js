import './Pokemon.css'

export default function Pokemon()
{
    const num=Math.floor(Math.random()*151)+1;
    let lin=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`

    return (
        <div className="Pokemon">
            <h1>Pokemon Number : {num}</h1>
            <img src={lin} alt=""></img>
        </div>
    )
}