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
	svg {
		width: 30px;
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
	return (
		<>
			<LeftSideContainer>
				<SideIcon>
					<Github />
				</SideIcon>
				<SideIcon>
					<Email />
				</SideIcon>
				<SideIcon>
					<LinkedinSquare />
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
