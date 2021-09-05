import React from "react"
import ReactDom from "react-dom"
import logo from '../logo.svg';
import '../App.css';

import Footer from "./Footer";
import Header from "./Header";

const date = new Date();
let hours = date.getHours();
let timeofdate;

const styles = {
    fontSize: 30
}

if (hours < 12) {
    timeofdate = "morning"
    styles.color = "#D90F"
} else {
    timeofdate = "afternoon"
    styles.color = "#D90000"
}
const App = () => (
    <div className="App">
        <Header/>
        <header className="App-header">
            <h1 style={styles}>Good {timeofdate}</h1>
            <h1>Hello JSXs!</h1>
            <input type="checkbox"/>
            <p style={styles}>{timeofdate}</p>
        </header>
        <Footer/>
    </div>
);


/* function App (){
    return (
        //Rest of the code in above
    )
}
 */
export default App;
