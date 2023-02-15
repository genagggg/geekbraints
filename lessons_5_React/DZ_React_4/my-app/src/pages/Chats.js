import React, { useState } from "react";

const Chats = () => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Sergey'
        },
        {
            id: 2,
            name: 'Maxim'
        },
    ]);

    const [name, setName] = useState('');

    const handleDelete = (id) => {
        const filtered = chats.filter((item) => item.id !== id)
        setChats(filtered);
    }

    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: name
        }

        setChats(prevState => [...prevState, obj])
    }

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            {chats.map((chat) => {
                return (
                    <div>

                        <h3>{chat.name}</h3>
                        <button onClick={() => handleDelete(chat.id)}>x</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Chats;