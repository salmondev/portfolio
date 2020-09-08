import React from 'react';
import styled from 'styled-components';

import { Github } from '@styled-icons/boxicons-logos';
import { Email } from '@styled-icons/material-twotone';
import { LinkedinSquare } from '@styled-icons/boxicons-logos';

const SideContainer = styled.div`
	width: 40px;
	position: fixed;
	z-index: 10;
	text-align: center;
	color: white;
`;
const LeftSideContainer = styled(SideContainer)`
	bottom: 0px;
	left: 40px;
	right: auto;
`;
const RightSideContainer = styled(SideContainer)`
	bottom: 0px;
	left: auto;
	right: 40px;
`;
const SideText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	letter-spacing: 0.1em;
	writing-mode: vertical-rl;
	margin: 10px auto;
	padding: 10px;
`;

const SideIcon = styled.div`
	padding: 0.5em 0;
	a {
		color: white;
		text-decoration: none;
	}
	svg {
		width: 30px;
		cursor: pointer;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 2px;
	height: 50px;
	margin: 0px auto;
	background-color: white;
`;

const Sidebar = () => {
	const handleClipboardClick = () => {
		navigator.clipboard.writeText('alfonso.achiaga@gmail.com');
		return;
	};

	return (
		<>
			<LeftSideContainer>
				<SideIcon>
					<a href='https://github.com/Achiaga' target='_blank'>
						<Github />
					</a>
				</SideIcon>
				<SideIcon>
					<Email onClick={handleClipboardClick} />
				</SideIcon>
				<SideIcon>
					<a href='https://www.linkedin.com/in/alfonso-diez-achiaga/' target='_blank'>
						<LinkedinSquare />
					</a>
				</SideIcon>
				<Line />
			</LeftSideContainer>
			<RightSideContainer>
				<SideText>Thank you for your visit !</SideText>
				<Line />
			</RightSideContainer>
		</>
	);
};

export default Sidebar;
