'use client'

const Error = (error) => {
    return(
        <div className="p-5 bg-red-300 text-black text-xl rounded-md">
            {error.error.message}
        </div>
    );
}

export default Error;