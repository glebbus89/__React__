import { useState } from "react";

function CommentsList () {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]); 

        function clickDelete(index) {
            const newComments = [...comments];
            newComments.splice(index, 1);
            setComments(newComments);
        }
        
    return (
    <div>
        <h2>Комментарии</h2>
        <ul>
            {comments.map((comment) => (
            <li key={comment.id}>{comment.text}
            <button onClick={() => clickDelete(comments.indexOf(comment))}>Удалить</button></li>
            ))}
        </ul>
    </div>
        


    );
}

export default CommentsList ;