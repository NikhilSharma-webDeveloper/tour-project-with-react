import React from "react";

export const Tour = ({ id, info, image, name, price, remove }) => {

    const [readMore, setReadMore] = React.useState(false);
    return (
        <section className="tour">
            <div className="imgArea">
                <img src={image} name={name} className="img"></img>
            </div>
            <div className="imgText">
                <section className="imgtitle">
                    <h3>
                        {name}
                    </h3>
                    <p>
                        ${price}
                    </p>
                </section>

                <p className="imgDesc">{
                    readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="more" onClick={() => {
                        setReadMore(!readMore);
                    }}>{readMore ? "Show Less" : "Read More"}</button></p>
                <button onClick={() => {
                    remove(id)
                }}>Not Interested</button>
            </div >
        </section >
    );
}