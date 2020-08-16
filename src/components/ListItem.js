import React from 'react';

const ListItem = ({ item, index, toggleTodoDone, removeTodo }) => {
	return (
		<li className={item.done ? 'done' : ''}>
			<input
				type="checkbox"
				onChange={(e) => toggleTodoDone(e, index)}
				checked={item.done}
			/>
			<span>{item.title}</span>
			<button onClick={() => removeTodo(index)}>Remove Todo</button>
		</li>
	);
};

export default ListItem;
