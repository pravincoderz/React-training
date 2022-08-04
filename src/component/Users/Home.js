import React from "react";
import Login from "./component/Users/Login";
import Register from "./component/Users/Register";


function Home() {

    

    return (
        <div>
            <button onClick={ () => this.gotoReg()} >Register</button>
            <button onClick={ () => this.gotoLogin()} >Login</button>
        </div>
    )
}
export default Home;