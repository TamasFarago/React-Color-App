import sizes from "./Sizes"
import bg from "./bg.svg"
const styles = {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active":{
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        backgroundColor: "blue",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#480b8a",
        backgroundImage: `url(${bg})`,
        
    },
    heading: {
        fontSize: "1.5rem"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        [sizes.down("xs")]: {
            width: "60%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white",
           
        }
    },
   
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.5rem",
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)"
        }
    },
    
}

export default styles