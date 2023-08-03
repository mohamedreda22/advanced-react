import React, { useEffect, useState } from "react";

function CustomerData() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.results[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    return (
        <div style={{ padding: "40px" }}>
            {loading ? (
                <h1>Data pending...</h1>
            ) : (
                <>
                    <h1>Customer Data</h1>
                    <h2>Name: {user.name.first} {user.name.last}</h2>
                    <img src={user.picture.large} alt="Customer" />
                </>
            )}
        </div>
    );
}

export default CustomerData;
