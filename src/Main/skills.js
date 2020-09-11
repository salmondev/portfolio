import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RightArrow } from '@styled-icons/boxicons-regular/';
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

const BodyList = styled.ul`
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

const Skills = ({}) => {
	return (
		<Container>
			<Title>
				<TitleText>Skills</TitleText>
				<Line />
			</Title>
			<EducationBox>
				<ListSkills />
				<ListContainer>
					<BodyList>
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
