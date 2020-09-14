import React, { useState, useRef } from 'react';
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

	const heroRef = useRef(null);
	const expRef = useRef(null);
	const skillsRef = useRef(null);
	const projectRef = useRef(null);
	const aboutRef = useRef(null);

	const handleToast = (msg) => {
		setToast((oldVal) => [...oldVal, msg]);
		setTimeout(() => {
			setToast((oldState) => oldState.splice(1, 1));
		}, 3000);
	};

	const handleScroll = (e) => {
		const { id } = e.currentTarget;
		if (id === 'intro') return scrollToRef(heroRef);
		if (id === 'exp') return scrollToRef(expRef);
		if (id === 'skills') return scrollToRef(skillsRef);
		if (id === 'project') return scrollToRef(projectRef);
		if (id === 'about') return scrollToRef(aboutRef);
		return scrollToRef(heroRef);
	};

	const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

	return (
		<Theme>
			<AppContainer>
				<Header handleScroll={handleScroll} setDidScroll={setDidScroll} />
				<Sidebar handleToast={handleToast} />
				<Notification toast={toast} />
				<Main
					heroRef={heroRef}
					expRef={expRef}
					skillsRef={skillsRef}
					projectRef={projectRef}
					aboutRef={aboutRef}
					handleToast={handleToast}
					didScroll={didScroll}
				/>
				<Footer />
			</AppContainer>
		</Theme>
	);
}

export default App;
