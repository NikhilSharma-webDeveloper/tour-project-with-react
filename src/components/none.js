import React from "react";

export const None = ({ data }) => {
    return (
        <>
            <div className="container" id="loading">
                <h1>No Tours Left</h1>
            </div>
            <button style={{
                backgroundColor: "#49A6E9",
                color: "white",
                cursor: "pointer",
                display: "block",
                border: "none",
                fontSize: "20px",
                padding: "3px 10px"
            }
            } onClick={() => data()}>Refresh</button>
        </>
    );
}