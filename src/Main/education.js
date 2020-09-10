import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RightArrow } from '@styled-icons/boxicons-regular/';
import { data } from './data-work';
import ItemEducationList from './item-education';

const Container = styled(motion.section)`
	padding-top: 150px;
	padding-bottom: 150px;
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

const ListContainer = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: baseline;
	padding-left: 4em;
`;

const List = styled.div``;

const TitleList = styled.h1`
	font-size: 28px;
	color: palevioletred;
	width: fit-content;
`;

const BodyList = styled.ul`
	font-size: 20px;
	letter-spacing: 2px;
	list-style-type: none;
	font-family: 'Titillium Web';
	li {
		cursor: pointer;
		line-height: 50px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
`;

const Education = ({}) => {
	return (
		<Container>
			<Title>
				<TitleText>Skills</TitleText>
				<Line />
			</Title>
			<ListContainer>
				<List>
					<BodyList>
						{Object.keys(data.education).map((item, key) => {
							return <ItemEducationList item={item} index={key} key={key} />;
						})}
					</BodyList>
				</List>
			</ListContainer>
		</Container>
	);
};

export default Education;
