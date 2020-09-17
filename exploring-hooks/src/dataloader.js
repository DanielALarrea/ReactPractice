import React, { useState, useEffect } from "react";

export default function DataLoader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/links")
        .then(response => response.json())
        .then(data => setData(data));

        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });

        return () => socket.disconnect();
    }, []);

    return props.render(data);

    // return (
    //     <div>
    //         <ul>
    //             {data.map(el => (
    //                 <li key={el.id}>{el.title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
}