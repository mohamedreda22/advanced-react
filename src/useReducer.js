import { useReducer } from "react";
import './App.css';

const reducer=(state,action)=>{
    if(action.type==="buy_ingredients"){
        return {money:state.money-10};
    }
    else if(action.type==="sell_a_meal"){
        return {money:state.money+15};
    }
    else if (action.type==="celebrity_vistit"){
        return {money:state.money+5000};
    }
    else{
        return state;
    }}
    export function Financial(){
        const initialState={money:100};
        const [state,dispatch]= useReducer(reducer,initialState);
        return(
            
            <div>
                <h1>Wallet:{state.money}</h1>
                <button onClick={()=>dispatch({type:"buy_ingredients"})}>Buy Ingredients</button>
                <button onClick={()=>dispatch({type:"sell_a_meal"})}>Sell Ingredients</button>
                <button onClick={()=>dispatch({type:"celebrity_vistit"})}>Celebrity Visit</button>
            </div>
        );
    }
