import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	padding: 1em 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Asap', sans-serif;
	background: #1e1e1e;
	z-index: 9999;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	background: #1f1f1f;
	background: linear-gradient(to right, palevioletred ${(props) => props.scroll}, white 0);
	color: transparent;
	-webkit-background-clip: text;
`;

const HeaderTextContainer = styled(motion.div)`
	padding: 0 10px;
	height: 45px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	cursor: pointer;
`;

const HeaderText = styled(motion.h4)`
	font-size: 18px;
	margin: 0;
	padding: 0;
	color: transparent;
	background: transparent;
`;
const HeaderLine = styled.div`
	content: '';
	display: block;
	height: 2px;
	min-width: 6%;
	margin: 0px auto;
	color: transparent;
	background-color: white;
`;

const NavbarHeader = ({ setDidScroll, handleScroll }) => {
	const [scrollProgress, setScrollProgress] = useState('20%');

	const listenToScrollEvent = () => {
		document.addEventListener('scroll', () => {
			const scrollPx = document.documentElement.scrollTop;
			const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrolled = (scrollPx / winHeightPx) * 100;
			scrolled = Math.round(scrolled + 20);
			scrolled = `${scrolled}%`;
			setDidScroll(true);
			setScrollProgress(scrolled);
		});
	};

	useEffect(() => {
		listenToScrollEvent();
	}, []);

	return (
		<HeaderContainer>
			<Header scroll={scrollProgress}>
				<HeaderTextContainer id='about' onClick={handleScroll}>
					<HeaderText>About</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='exp' onClick={handleScroll}>
					<HeaderText>Experience</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='skills' onClick={handleScroll}>
					<HeaderText>Skills</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='project' onClick={handleScroll}>
					<HeaderText>Projects</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='contact' onClick={handleScroll}>
					<HeaderText>Contact</HeaderText>
				</HeaderTextContainer>
			</Header>
		</HeaderContainer>
	);
};

export default NavbarHeader;
