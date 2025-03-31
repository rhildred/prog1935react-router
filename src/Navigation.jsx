import {NavLink} from "react-router-dom";
import "./Navigation.css";

export default function Navigation(){
    return <>
    <NavLink to="/" className={({isActive})=>(isActive?"active":"inactive")}>Home</NavLink>&nbsp;
    <NavLink to="about" className={({isActive})=>(isActive?"active":"inactive")}>About</NavLink>&nbsp;
    <NavLink to="user" className={({isActive})=>(isActive?"active":"inactive")}>hello</NavLink>
    </>
}