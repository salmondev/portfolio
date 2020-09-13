import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataEducation } from './data';
import ItemEducationList from './item-education';
import ListSkills from './list-skills';

const Container = styled(motion.section)`
	padding-top: 150px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
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
`;

const TitleText = styled.h1`
	font-size: 32px;
	padding-right: 0.7em;
	padding-left: 1em;
	color: white;
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

const EducationBox = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: baseline;
	height: 355px;
`;

const ListContainer = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: baseline;
	height: 355px;
`;

const BodyList = styled(motion.ul)`
	font-size: 20px;
	letter-spacing: 2px;
	list-style-type: none;
	font-family: 'Titillium Web';
	li {
		cursor: pointer;
		line-height: 65px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
`;

const Skills = ({ skillsRef }) => {
	const [lastYPos, setLastYPos] = useState(0);
	const [shouldShowTitle, setShouldShowTitle] = useState(false);
	const [shouldShowBody, setShouldShowBody] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const yPos = window.scrollY;
			const isScrollingUp = yPos > 1100;
			const shouldShowBody = yPos > 1300;

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
		<Container ref={skillsRef}>
			<Title
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: shouldShowTitle ? 1 : 0, x: shouldShowTitle ? 0 : -200 }}
				transition={{ x: { type: 'spring', stiffness: 100, damping: 7 }, default: { duration: 0.5 } }}>
				<TitleText>Skills</TitleText>
				<Line />
			</Title>
			<EducationBox>
				<ListSkills shouldShowBody={shouldShowBody} />
				<ListContainer>
					<BodyList
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: shouldShowBody ? 1 : 0, x: shouldShowBody ? 0 : 100 }}
						transition={{ duration: 0.8 }}>
						{Object.keys(dataEducation).map((item, key) => {
							return <ItemEducationList item={item} index={key} key={key} />;
						})}
					</BodyList>
				</ListContainer>
			</EducationBox>
		</Container>
	);
};

export default Skills;
