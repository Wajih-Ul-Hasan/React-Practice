import TodoItem from './TodoItem';

function TodoItems() {
    const todoItems = [
        {
            Name: "Indoor Match",
            Date: "9/7/2024",
        },
        {
            Name: "DHA Suffa Class",
            Date: "10/7/2024",
        },
        {
            Name: "Back To Office",
            Date: "11/7/2024",
        }
    ];

    // Use map to render TodoItem for each item
    return (
        <>
            {todoItems.map((item, index) => (
                <TodoItem 
                    key={index}
                    todoName={item.Name}
                    todoDate={item.Date}
                />
            ))}
        </>
    );
}

export default TodoItems;
