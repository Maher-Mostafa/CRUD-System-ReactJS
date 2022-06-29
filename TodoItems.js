import React from 'react'
import './TodoItems.css'



const TodoItems = (props) => { 

    const { items, deleteItem } = props;
    let length = items.length;
    const ListItem = length ? (items.map((item) => {
        return (
            <div>
                <p key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span>{item.id}</span>
                    <span onClick={() => deleteItem(item.id)}>Button</span>
                </p>
            </div>)
    })) :
        (<p> There is no item to show </p>)

return (
    <div>

        {ListItem};

    </div>
)
}


export default TodoItems