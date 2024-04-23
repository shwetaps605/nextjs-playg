
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.phpq?f=a"

const DrinksPage = async () => {

    const delay =  new Promise((resolve) => setTimeout(resolve,1000))
    await delay;

    const response = await fetch(url)

    if(!response.ok) {
        throw new Error("Failed to fetch drinks")
    }
    const data = await response.json()
    console.log(data)


    return(
        <div className="text-3xl">
            Drinks Page
        </div>
    )
}

export default DrinksPage;