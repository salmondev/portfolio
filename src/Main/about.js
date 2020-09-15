import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

const Container = styled(motion.section)`
	padding-top: 140px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
	min-height: 90vh;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 450px) {
		padding-left: 23px;
		padding-right: 23px;
		min-height: auto;
		max-width: auto;
		padding-top: 50px;
		padding-bottom: 100px;
	}
`;

const Title = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	padding-bottom: 0.5em;
	@media only screen and (max-width: 450px) {
		height: 35px;
	}
`;

const TitleText = styled.h1`
	font-size: 32px;
	padding-right: 0.7em;
	padding-left: 1em;
	color: white;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 70%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	@media only screen and (max-width: 450px) {
		width: 45%;
	}
`;

const Body = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 4em;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const TextContainer = styled.div`
	width: 50%;
	text-align: center;
	line-height: 30px;
	svg {
		color: none;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
		padding: 0 1em;
	}
`;

const About = ({ aboutRef }) => {
	return (
		<Container ref={aboutRef}>
			<Title>
				<TitleText>About Me</TitleText>
				<Line />
			</Title>
			<Body>
				<TextContainer>
					Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you
					have a question or just want to say hi, I'll try my best to get back to you!
				</TextContainer>
			</Body>
		</Container>
	);
};

export default About;
