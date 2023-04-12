const Button = ({ label, type, onClick }) => {
    
    const styles = () => {
        return (
            type == 'main'
            ? "font-Roboto bg-main text-white rounded-full py-2 px-6 hover:bg-mainHover active:bg-neutral-300"
            : "font-Roboto bg-white text-black rounded-full border border-black py-2 px-6 hover:bg-black hover:text-white active:bg-neutral-300"
        )
    }

    return(
        <button
            className={styles()}
            onClick={onClick}
        >
                {label}
        </button>
    )
}

export default Button