import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	position: fixed;
	left: 0;
	top: 3%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Asap', sans-serif;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40%;
	background: #1f1f1f;
	background: linear-gradient(to right, palevioletred ${(props) => props.scroll}, white 0);
	color: transparent;
	-webkit-background-clip: text;
`;

const HeaderTextContainer = styled.div`
	width: 95px;
	min-width: 95px;
	height: 45px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	cursor: pointer;
`;

const HeaderText = styled.h4`
	font-size: 20px;
	margin: 0;
	padding: 0;
	color: transparent;
	background: transparent;
`;
const HeaderLine = styled.div`
	content: '';
	display: block;
	height: 2px;
	width: 100%;
	margin: 0px auto;
	color: transparent;
	background-color: white;
`;

const NavbarHeader = ({ setDidScroll }) => {
	const [scrollProgress, setScrollProgress] = useState('0');

	const listenToScrollEvent = () => {
		document.addEventListener('scroll', () => {
			const scrollPx = document.documentElement.scrollTop;
			const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrolled = (scrollPx / winHeightPx) * 100;
			scrolled = Math.round(scrolled);
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
				<HeaderTextContainer>
					<HeaderText>About</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer>
					<HeaderText>Work</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer>
					<HeaderText>Projects</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer>
					<HeaderText>Contact</HeaderText>
				</HeaderTextContainer>
			</Header>
		</HeaderContainer>
	);
};

export default NavbarHeader;
