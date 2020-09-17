import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        // fetch(url)
        // .then(response => response.json())
        // .then(data => setData(data));
        getData();
    }, []);
    

    return data;
}