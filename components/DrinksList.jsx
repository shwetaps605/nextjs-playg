'use client'
import Link from "next/link";
import Image from "next/image";

const DrinksList = ({drinks}) => {
   
    return(
        <ul className="grid gap-6 sm:grid-cols-3 mt-6">
            {drinks.map(drink => {
                return(
                    <li key={drink.idDrink}>
                        <Link  href={`drinks/${drink.idDrink}`}>
                            {/* <img className="h-52"src={drink.strDrinkThumb}></img> */}
                            <div className="relative h-48 mb-4">
                            <Image 
                                src={drink.strDrinkThumb}
                                fill
                                sizes = '(max-width:768px) 100vw, (max-width:1200px) 50vw'
                                alt = {drink.strDrink}
                                className = "rounded-md object-cover"
                            />
                            </div>
                            <p>{drink.strDrink}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default DrinksList;