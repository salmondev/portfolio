import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataExperience } from './data';

const ExperienceInfo = styled(motion.div)`
	width: 50%;
	border: 2px solid palevioletred;
	background: #191919;
	border-radius: 8px;
	padding: 1em;
	height: 292px;
	@media only screen and (max-width: 450px) {
		width: 90%;
		height: auto;
		padding-bottom: 0;
	}
`;

const Title = styled(motion.div)`
	padding: 0 0.2em;
	padding-bottom: 20px;
	@media only screen and (max-width: 450px) {
		padding-bottom: 7px;
	}
`;

const TitleText = styled.h4`
	font-family: 'Calibre', sans-serif;
	font-size: 22px;
	margin: 0;
	padding: 0.2em 0;
	@media only screen and (max-width: 450px) {
		font-size: 18px;
	}
`;

const DateText = styled.span`
	font-family: 'Roboto', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 16px;
	}
`;

const Body = styled.div``;

const ListInfo = styled.ul`
	@media only screen and (max-width: 450px) {
		padding-left: 20px;
	}
`;

const Info = styled.li`
	padding-bottom: 30px;
	@media only screen and (max-width: 450px) {
		font-size: 16px;
		font-family: 'Roboto';
	}
`;

const ItemExperienceInfo = ({ selected, shouldShowBody }) => {
	return (
		<ExperienceInfo>
			<Title>
				<TitleText>{dataExperience.info[selected].title}</TitleText>
				<DateText>{dataExperience.info[selected].date}</DateText>
			</Title>
			<Body>
				<ListInfo>
					<Info>{dataExperience.info[selected].first}</Info>
					<Info>{dataExperience.info[selected].second}</Info>
					<Info>{dataExperience.info[selected].third}</Info>
				</ListInfo>
			</Body>
		</ExperienceInfo>
	);
};

export default ItemExperienceInfo;
