import React from "react";
import { Title } from "./title";
import { Tour } from "./tour";

export const Tours = ({ tours, remove }) => {
    console.log(remove);
    return (
        <>
            <div className="container">
                <Title>
                </Title>
                <div>
                    {
                        tours.map((tour) => {
                            return (<Tour key={tour.id} {...tour} remove={remove}></Tour>)
                        })
                    }
                </div>
            </div>

        </>
    )
}