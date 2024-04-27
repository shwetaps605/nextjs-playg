import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
const DrinksPage = async () => {
    const delay =  new Promise((resolve) => setTimeout(resolve,1000))
    await delay;

    const response = await fetch(url)

    if(!response.ok) {
        throw new Error("Failed to fetch drinks")
    }
    const data = await response.json()

    return(
        <DrinksList drinks={data.drinks}/>
    )
}

export default DrinksPage;