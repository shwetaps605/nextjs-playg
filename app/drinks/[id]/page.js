import Link from "next/link";


const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"
const DrinkPage = async ({params}) => {
    const drinkByIdUrl = `${url}?i=${params.id}`
    let response = await fetch(drinkByIdUrl);
    const data = await response.json()
    const drinkData = data.drinks[0]
    return(
        <div>
            <div className="p-5 bg-violet-300">
                <h2>{drinkData.strDrink}</h2>
                <img className="h-52" src={drinkData.strDrinkThumb}/>
            </div>
            <Link href="/drinks" className="mt-2 btn btn-accent">Drinks</Link>
        </div>
    );
}

export default DrinkPage;