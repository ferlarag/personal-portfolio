const Grid2x2 = ({children}) => {
    return(
        <div className="
            grid grid-cols-1s gap-6 mt-8 w-full
            md:grid-cols-2
        ">
            {children}
        </div>
    )
}

export default Grid2x2