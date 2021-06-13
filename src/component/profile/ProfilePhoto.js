import photo from "../../ayoub-pic.jpg"

const photoStyle = {
    border: "2px solid black",
    borderRadius: "50%"
}

function Photo() {
    return <img src={photo} alt="my profile" style={photoStyle} />
}

export default Photo;