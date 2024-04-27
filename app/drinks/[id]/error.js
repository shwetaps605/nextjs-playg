'use client'
const DrinkError = ({params}) => {
    return(
        <div>
            Failed fetching drink with id: {params.id}
        </div>
    )
}

export default DrinkError;