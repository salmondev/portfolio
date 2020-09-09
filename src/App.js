import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import Header from './Header/navbar-header';
import Sidebar from './Sidebar/sidebar';
import Main from './Main/main';
import Notification from './Notification/notification';
import Footer from './Footer/footer';

const AppContainer = styled.div`
	background: #1e1e1e;
	font-family: 'Nunito', sans-serif;
`;

function App() {
	const [didScroll, setDidScroll] = useState(false);
	const [toast, setToast] = useState([]);

	const handleToast = (msg) => {
		setToast((oldVal) => [...oldVal, msg]);
		setTimeout(() => {
			setToast((oldState) => oldState.splice(1, 1));
		}, 3000);
	};

	return (
		<Theme>
			<AppContainer>
				<Header setDidScroll={setDidScroll} />
				<Sidebar handleToast={handleToast} />
				<Notification toast={toast} />
				<Main handleToast={handleToast} didScroll={didScroll} />
				<Footer />
			</AppContainer>
		</Theme>
	);
}

export default App;
