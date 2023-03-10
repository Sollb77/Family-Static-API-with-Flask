import React, {useContext,useEffect} from "react";
import { useInRouterContext } from "react-router";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store, actions} = useContext(Context)
    useEffect(() =>{
		actions.getPeople();
		actions.getPlanet()
	},[])
  

	return(
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> <br />
		<button onclick="changeColor" type="button" class="btn btn-warning amarillo">Warning</button>
	</div>
    );}
