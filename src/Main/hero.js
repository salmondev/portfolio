import React from 'react';
import styled from 'styled-components';

import MockupImg from '../assets/mockup-image.png';

const Container = styled.section`
	padding: 200px 150px;
	margin: 0px auto;
	max-width: 1600px;
	min-height: 100vh;
`;

const Content = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`;

const Intro = styled.div``;

const Title = styled.h1`
	margin: 0;
	margin: 1rem 0;
	margin-top: 0em;
	font-size: 75px;
	text-align: start;
	color: palevioletred;
	font-family: 'Titillium Web';
	span {
		color: palevioletred;
	}
`;

const FirstTitle = styled(Title)`
	font-size: 20px;
	margin: 0.4em 0;
	color: white;
	font-family: 'Asap', sans-serif;
`;

const SubTitle = styled(Title)`
	font-size: 38px;
	margin: 0;
	color: white;
	font-family: 'Asap', sans-serif;
`;

const Description = styled(Title)`
	padding-top: 2em;
	width: 650px;
	font-size: 25px;
	margin: 0;
	color: white;
`;

const HeroImg = styled.img`
	width: 600px;
`;

const Hero = () => {
	return (
		<Container>
			<Content>
				<Intro>
					<FirstTitle>My name is,</FirstTitle>
					<Title>
						Alfonso <span> Achiaga</span>
					</Title>
					<SubTitle>
						I'm a <span>Frontend Web Engineer</span> building cool stuff.
					</SubTitle>
					<Description>
						I'm a software engineer based in Boston, MA specializing in building (and occasionally designing)
						exceptional websites, applications, and everything in between.
					</Description>
				</Intro>
			</Content>
		</Container>
	);
};

export default Hero;
