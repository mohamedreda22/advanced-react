/*function DessertsList(props) {
    const desserts =props.data.sort((a,b)=> a.calories - b.calories);

    return <ul>
        {
         desserts.filter((dessert)=> dessert.calories<500)
         .map((dessert)=>(
            <li>{dessert.name} - {dessert.calories} cal</li>
         ))    
         }
    </ul>   */
const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
        .filter((dessert) => {
            return dessert.calories < 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <li>
                    {dessert.name} - {dessert.calories} cal
                </li>
            );
        });
    return <ul>{lowCaloriesDesserts}</ul>;

}





export default DessertsList;
