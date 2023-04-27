import React, { useState } from 'react';

const Header = ({ myProps }) => {
	return <h1>{myProps}</h1>;
};

const App = () => {
	const [myState, setMyState] = useState('');
	return (
		<div>
			<Header myProps={"Here's my props!"} />
			<input value={myState} onChange={(e) => setMyState(e.target.value)} />
		</div>
	);
};

export default App;
