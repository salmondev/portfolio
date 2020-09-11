import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
	padding-top: 150px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
	min-height: 90vh;
	color: white;
	font-family: 'Asap', sans-serif;
`;

const Title = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleText = styled.h1`
	font-size: 35px;
	padding-right: 1em;
	padding-left: 1em;
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 25%;
	height: 1px;
	/* margin: 0px auto; */
	background-color: white;
`;

const Projects = ({}) => {
	return (
		<Container>
			<Title>
				<Line />
				<TitleText>My Projects</TitleText>
				<Line />
			</Title>
		</Container>
	);
};

export default Projects;
