import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import Header from './Header/navbar-header';
import Sidebar from './Sidebar/sidebar';
import Main from './Main/main';
import Footer from './Footer/footer';

const AppContainer = styled.div`
	background: #1e1e1e;
	font-family: 'Nunito', sans-serif;
`;

function App() {
	const [didScroll, setDidScroll] = useState(false);

	return (
		<Theme>
			<AppContainer>
				<Header setDidScroll={setDidScroll} />
				<Sidebar />
				<Main didScroll={didScroll} />
				<Footer />
			</AppContainer>
		</Theme>
	);
}

export default App;
