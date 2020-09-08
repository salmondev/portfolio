import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowheadDown } from '@styled-icons/evaicons-solid';

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
	width: 690px;
	font-size: 25px;
	margin: 0;
	color: white;
	word-spacing: 2px;
	line-height: 45px;
`;

const HeroImg = styled.img`
	width: 600px;
`;

const ScrollDown = styled.div`
	position: absolute;
	bottom: 8px;
	left: 47%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100px;
	color: white;
	color: palevioletred;
	font-size: 18px;
	font-family: 'Asap', sans-serif;
	svg {
		width: 40px;
	}
`;

const ScrollDownContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const bounceTransition = {
	y: {
		duration: 0.5,
		yoyo: Infinity,
		ease: 'easeOut',
	},
};

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
						{
							"I'm a frontend software engineer. I have lived in 🇪🇸 🇸🇪 🇰🇷. I like to build ( and designing ) exceptional websites, applications, and everything in between.  I speak fluently  🇪🇸  🇺🇸."
						}
					</Description>
				</Intro>
			</Content>
			<ScrollDown>
				<ScrollDownContainer transition={bounceTransition} animate={{ y: ['0%', '-50%'] }}>
					Scroll Down
					<ArrowheadDown />
				</ScrollDownContainer>
			</ScrollDown>
		</Container>
	);
};

export default Hero;
