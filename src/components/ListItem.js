import React from 'react';

const ListItem = ({ item, index, toggleTodoDone, removeTodo }) => {
	return (
		<li className={item.done ? 'done' : ''}>
			<input
				type="checkbox"
				onChange={(e) => toggleTodoDone(e, index)}
				checked={item.done}
			/>
			<span className="light">{item.title}</span>
			<button onClick={() => removeTodo(index)}>
				<span role="img" aria-label="cross">
					❌
				</span>
			</button>
		</li>
	);
};

export default ListItem;
