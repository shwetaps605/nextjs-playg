'use client'

const Error = (error) => {
    console.log(error)
    return(
        <div>
            {error.error.message}
        </div>
    );
}

export default Error;