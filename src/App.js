import React from "react";
import "./App.css";
import Ciao from "./components/CiaoSection/Ciao";
import StopWatch from "./components/StopWatch";
import StopWatch2 from "./components/StopWatch2";
import UserCard from "./components/UserSection/UserCard";

const App = (props) => {

    return (
        <>
            <StopWatch/>
            <Ciao classStyle="" name="Qwerty" id="2"/>
            <StopWatch2/>
            <UserCard user={{id:2, firstName:"Brad", lastName:"Pitt", isSelected:true }}
            userSelectod={()=>{}}/>
        </>
    );
}


export default App;
