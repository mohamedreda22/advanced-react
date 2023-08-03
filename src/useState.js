import { useState } from "react";

function Restaurant() {
    const [header, setHeader] = useState("Lemon");
    const [clicked, setClicked] = useState(false);

    function updateRestaurantName() {
        if (clicked) {
            setHeader("Little Lemon");
        } else {
            setHeader("Limon");
        }
        setClicked(!clicked); 
    }

    return (
        <div>
            <h1>{header}</h1>
            <button onClick={updateRestaurantName}>
                Update Restaurant Name
            </button>
        </div>
    );
}

export default Restaurant;
