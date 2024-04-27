'use client'
import Link from "next/link";

const DrinksList = ({drinks}) => {
   
    return(
            <div className="grid gap-4 grid-cols-3">
                {drinks.map(drink => {
                    return(
                    <Link key={drink.idDrink} href={`drinks/${drink.idDrink}`}>
                        <img className="h-52"src={drink.strDrinkThumb}></img>
                        <p>{drink.strDrink}</p>
                    </Link>
                    )
                })}
            </div>
    )
}

export default DrinksList;