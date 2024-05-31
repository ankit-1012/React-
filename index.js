import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1536x1536.png"/>            
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const RestaurantCard = () =>{
    return (
        //..img name rating cusiisne
        <div className="res-card">  
            <img 
                className="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
            />
            <h3>Meghana Foods</h3>
            <h4>Asian Indian Chinese</h4>
            <h4>4.4 stars</h4>
            <h4>30 mins</h4>
        </div>
    )
}
const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)