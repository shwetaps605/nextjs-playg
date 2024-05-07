import Link from "next/link";
import Image from "next/image";


const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"
const DrinkPage = async ({params}) => {
    const drinkByIdUrl = `${url}?i=${params.id}`
    let response = await fetch(drinkByIdUrl);
    const data = await response.json()
    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;

    return(
        <div>
            <div className="p-5 ">
                <h2 className="text-xl text-black">{title}</h2>
                {/* <img className="w-50 h-50 rounded shadow-lg mt-4" src={imgSrc}/> */}
                <Image src={imgSrc} height={300} width={300} className="w-50 h-50 rounded shadow-lg mt-4" alt={title}/>
            </div>
            <Link href="/drinks" className="mt-2 btn btn-accent">Drinks</Link>
        </div>
    );
}

export default DrinkPage;