import { useParams } from "react-router-dom";




function DetailPage() {
    const lst = [
        { id: 1, title: "Laptop" },
        { id: 2, title: "Desktop" },
        { id: 3, title: "Mobile" },
        ];

    const { id } = useParams();
    const item = lst.find((item) => item.id.toString() === id);
    
    return (
        <div>
            <h4>Details</h4>
            <p>ID: {item.id}</p>
            <p>TITLE: {item.title}</p>
        </div>
        );
    };

export default DetailPage;