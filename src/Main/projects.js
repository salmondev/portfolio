import React, { useState, useEffect } from 'react';
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
	height: 48px;
	padding-bottom: 0.5em;
`;

const TitleText = styled.h1`
	font-size: 32px;
	padding-right: 0.7em;
	padding-left: 1em;
	color: palevioletred;
	font-family: 'Calibre', sans-serif;
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 70%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	/* margin: 0px auto; */
`;

const Projects = ({ projectRef }) => {
	const [lastYPos, setLastYPos] = useState(0);
	const [shouldShowTitle, setShouldShowTitle] = useState(false);
	const [shouldShowBody, setShouldShowBody] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const yPos = window.scrollY;
			console.log(yPos);
			const isScrollingUp = yPos > 500;
			const shouldShowBody = yPos > 550;

			if (isScrollingUp) setShouldShowTitle(true);
			if (shouldShowBody) setShouldShowBody(true);
			setLastYPos(yPos);
		}

		window.addEventListener('scroll', handleScroll, false);

		return () => {
			window.removeEventListener('scroll', handleScroll, false);
		};
	}, [lastYPos]);
	return (
		<Container ref={projectRef}>
			<Title
				initial={{ opacity: 0, x: 300 }}
				animate={{ opacity: shouldShowTitle ? 1 : 0, x: shouldShowTitle ? 0 : 300 }}
				transition={{ x: { type: 'spring', stiffness: 100, damping: 7 }, default: { duration: 0.5 } }}>
				<TitleText>My Projects</TitleText>
				<Line />
			</Title>
		</Container>
	);
};

export default Projects;
