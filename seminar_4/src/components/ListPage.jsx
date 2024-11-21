import React from 'react';
import { Link } from 'react-router-dom';



function ListPage() {
    const lst = [
        { id: 1, title: "Laptop" },
        { id: 2, title: "Desktop" },
        { id: 3, title: "Mobile" },
        ];

    return (
        <div>
            <h1>Some list</h1>
        <ul>
            {lst.map((item) => (
            <li>
            <Link to={`/details/${item.id}`}>{item.title}</Link>
            </li>
        ))}
        </ul>
        </div>
        );
    };

export default ListPage;