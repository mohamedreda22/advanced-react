import "./App.css";
import { useState,useEffect } from "react";


const DataFetchier = ({render,url}) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
if(url.includes("desserts")){
    setData(["cake","icecream","chocolate","pie "]);
}
else {
    setData(["coffee","tea","juice","milkshake","smoothie"]);
}
    }, [url]);
    
    return render(data);
    }
    const DessertsCount = () => {
        return (
            <DataFetchier
            url="https://littlelemon/desserts"
            render={(data) => <h2>{data.length} Desserts</h2>}
            />
            );
            };

const DrinksCount = () => {
    return (
        <DataFetchier
        url="https://littlelemon/drinks"
        render={(data) => <h2>{data.length} Drinks</h2>}
        />
        );
        };

const DessertCountApp = () => {
    return (
        <div>
        <DessertsCount />
        <DrinksCount />
        </div>
        );
        }
        export default DessertCountApp;