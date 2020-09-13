import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';
import ItemExperienceList from './item-experience-list';
import ItemExperienceInfo from './item-experience-info';
import { dataExperience } from './data';

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

const ListContainer = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const List = styled(motion.div)`
	width: 40%;
`;

const BodyList = styled(motion.ul)`
	font-size: 20px;
	letter-spacing: 2px;
	list-style-type: none;
	font-family: 'Titillium Web';
`;

const Experience = ({ expRef }) => {
	const [selected, setSelected] = useState(0);
	const [lastYPos, setLastYPos] = useState(0);
	const [shouldShowTitle, setShouldShowTitle] = useState(false);
	const [shouldShowBody, setShouldShowBody] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const yPos = window.scrollY;
			const isScrollingUp = yPos > 450;
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

	const handleClick = (index) => setSelected(index);

	return (
		<Container ref={expRef}>
			<Title
				initial={{ opacity: 0, x: 300 }}
				animate={{ opacity: shouldShowTitle ? 1 : 0, x: shouldShowTitle ? 0 : 300 }}
				transition={{ x: { type: 'spring', stiffness: 100, damping: 7 }, default: { duration: 0.5 } }}>
				<TitleText>Experience</TitleText>
				<Line />
			</Title>
			<ListContainer>
				<List>
					<AnimateSharedLayout>
						<BodyList
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: shouldShowBody ? 1 : 0, y: shouldShowBody ? 0 : 100 }}
							transition={{ duration: 1.2 }}>
							{Object.keys(dataExperience.list).map((item, index) => {
								return (
									<ItemExperienceList
										key={index}
										item={item}
										index={index}
										handleClick={handleClick}
										selected={selected}
									/>
								);
							})}
						</BodyList>
					</AnimateSharedLayout>
				</List>
				<ItemExperienceInfo shouldShowBody={shouldShowBody} selected={selected} />
			</ListContainer>
		</Container>
	);
};

export default Experience;
