function List({listItems, renderItem}) {
    return ( 
        <div>
            <ul>
                {listItems.map((item, index) =>(
                    <li key={index}>{renderItem(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;