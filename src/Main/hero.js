import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowheadDown } from '@styled-icons/evaicons-solid';

const Container = styled(motion.section)`
	padding-top: 200px;
	padding-bottom: 50px;
	padding-left: 170px;
	margin: 0px auto;
	/* max-width: 1600px; */
	min-height: 75vh;
`;

const Content = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`;

const Intro = styled.div``;

const Title = styled(motion.h1)`
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
	font-size: 16px;
	font-family: 'Asap', sans-serif;
	svg {
		width: 30px;
	}
`;

const ScrollDownContainer = styled(motion.div)`
	display: ${(props) => (props.didScroll ? 'flex' : 'flex')};
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
		delay: 3.5,
	},
};

const Hero = ({ didScroll, handleToast }) => {
	const [count, setCount] = useState(0);

	const variants = {
		scroll: { opacity: 0 },
		noScroll: { y: ['0%', '-50%'] },
	};

	const handleDrag = () => {
		let newCount = count + 1;
		setCount(newCount);
		if (count > 2) handleToast('Stop breaking my website! ⛔️ 😉');
		return;
	};

	return (
		<Container>
			<Content>
				<Intro>
					<FirstTitle>My name is,</FirstTitle>
					<Title
						drag
						dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						dragTransition={{ bounceStiffness: 500, bounceDamping: 7 }}
						onDragEnd={handleDrag}
						initial={{ y: -300, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						Alfonso <span> Achiaga</span>
					</Title>
					<SubTitle
						initial={{ x: -300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						I'm a <span>Frontend Web Engineer</span> building cool stuff.
					</SubTitle>
					<Description initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
						{
							"I'm a self-taught frontend software engineer. I'm 23 years old. I have lived in 🇪🇸 🇸🇪 🇰🇷. I like building ( and designing ) exceptional websites, applications, and everything in between.  I speak fluently  🇪🇸  🇺🇸."
						}
					</Description>
				</Intro>
			</Content>
			<ScrollDown>
				<ScrollDownContainer
					didScroll={didScroll}
					variants={variants}
					transition={bounceTransition}
					animate={didScroll ? 'scroll' : 'noScroll'}>
					Scroll Down
					<ArrowheadDown />
				</ScrollDownContainer>
			</ScrollDown>
		</Container>
	);
};

export default Hero;
