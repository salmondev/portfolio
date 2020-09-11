import React, { useState } from 'react';
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

const BodyList = styled.ul`
	font-size: 20px;
	letter-spacing: 2px;
	list-style-type: none;
	font-family: 'Titillium Web';
`;

const Experience = ({}) => {
	const [selected, setSelected] = useState(0);

	const handleClick = (index) => {
		setSelected(index);
		return;
	};

	return (
		<Container>
			<Title>
				<TitleText>Experience</TitleText>
				<Line />
			</Title>
			<ListContainer>
				<List>
					<AnimateSharedLayout>
						<BodyList>
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
				<AnimateSharedLayout>
					<ItemExperienceInfo selected={selected} />
				</AnimateSharedLayout>
			</ListContainer>
		</Container>
	);
};

export default Experience;
