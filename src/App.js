import React, { useState } from 'react';

const ListItem = ({ text }) => {
	return <li>{text}</li>;
};

const List = ({ items }) => {
	const result = [];

	for (let i = 0; i < items.length; i++)
		result.push(<ListItem text={items[i]} />);

	return <ul>{result}</ul>;
};

const App = () => {
	const [myState, setMyState] = useState('');

	return (
		<div>
			<input value={myState} onChange={(e) => setMyState(e.target.value)} />
			<List items={['pizza', 'skateboard', 'gameboy']} />
		</div>
	);
};

export default App;
