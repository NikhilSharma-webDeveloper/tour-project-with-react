import React, { useState, useEffect } from "react";
import { Tours } from "./Tours";
import { Loading } from "./loading";
import { None } from "./none";
const url = "https://course-api.com/react-tours-project";

export const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        let newTours = tours.filter((tour) => {
            return !(tour.id === id);
        })
        setTours(newTours)
    }

    const data = () => {
        setLoading(true);
        fetch(url).then(response => {

            if (response.status > 199 && response.status < 299) {
                setLoading(false);
                return response.json();
            } else {
                setLoading(false);
                console.log("error")
            }
        }).then(responseText => {
            setTours(responseText)
        })
    }

    useEffect(() => {
        data();
        console.log(tours)
    }, [])

    if (loading) {
        return (<Loading></Loading>)
    }
    if (tours.length === 0) {
        return (<None data={data}></None>)
    }
    return (<Tours tours={tours} remove={removeTour}></Tours>);
}