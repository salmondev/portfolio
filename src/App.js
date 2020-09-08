import React from 'react';
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
	return (
		<Theme>
			<AppContainer>
				<Header />
				<Sidebar />
				<Main />
				<Footer />
			</AppContainer>
		</Theme>
	);
}

export default App;
