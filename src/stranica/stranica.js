import React from "react";
import './stranica.css'
import SearchBar from "../components/search-bar/search";
import Input from "../components/input/input";
import UsersBlock from "../components/users-block/users";


const Stranica = () => {
    return(
        <div className="main-div">
            <div className="search-bar">
                <h1 className="watch-together">Watch Together</h1>
                <SearchBar />
            </div>
            <div className="radni-deo">
                <h2 className="recent-containers">Recent Contents</h2>
                <div className="users-container">
                <UsersBlock name = "Demir" lastName = "Subasic"/>
                <UsersBlock name = "Alen" lastName = "Kalac"/>
                <UsersBlock name = "Umer" lastName = "Sacirovic"/>
                <UsersBlock name = "Remzo" lastName = "Gusinac"/>
                <UsersBlock name = "Dzemil" lastName = "Subasic"/>
                <UsersBlock name = "Omer" lastName = "Tutic"/>
                <UsersBlock name = "Nejla" lastName = "Pekovic"/>
                <UsersBlock name = "Ajla" lastName = "Erkovic"/>
                <UsersBlock name = "Edin" lastName = "Bjelovic"/>
                </div>
            </div>
        </div>
    )
}
export default Stranica;
