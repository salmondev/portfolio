import React from 'react';
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
`;

const HeaderTextContainer = styled.div`
	width: 105px;
	min-width: 105px;
	height: 43px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	cursor: pointer;
`;

const HeaderText = styled.h4`
	font-size: 20px;
	color: white;
	margin: 0;
	padding: 0;
`;
const HeaderLine = styled.div`
	content: '';
	display: block;
	height: 2px;
	width: 100%;
	margin: 0px auto;
	background-color: white;
`;

const NavbarHeader = () => {
	return (
		<HeaderContainer>
			<Header>
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
