import React from 'react';
import ListItem from './ListItem';
const TodoList = ({ todos, toggleTodoDone, removeTodo }) => {
	return (
		<ul>
			{todos.map((item, index) => {
				return (
					<ListItem
						key={index}
						item={item}
						index={index}
						toggleTodoDone={toggleTodoDone}
						removeTodo={removeTodo}
					/>
				);
			})}
		</ul>
	);
};

export default TodoList;
