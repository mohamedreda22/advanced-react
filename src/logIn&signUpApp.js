//This is an example of usinh spread operator 
import "./App.css";
const Button=({type,children,...buttonProps})=>{
    const className= type==="primary" ? "PrimaryButton" : "SecondaryButton";
    return(
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    )
}
const LoginButton=({type,children,...buttonProps})=>{
    return(
        <Button type="secondary" {...buttonProps}
        onClick={()=>alert("Login")}>
        
            {children}
        </Button>
    )   
}
 function LoginApp(){
    return(
        <div className="App">
            <header className="Header">Littel Limon Resturant</header>
            <Button type="primary" onClick={()=>alert("Sign Up")}>
                Sign Up
            </Button>
            <LoginButton type="secondary" >
                Login
            </LoginButton>
        </div>
    )
}
export default LoginApp;