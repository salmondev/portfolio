import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { dataExperience } from './data';

const ExperienceInfo = styled(motion.div)`
	width: 50%;
	border: 2px solid palevioletred;
	background: #191919;
	border-radius: 8px;
	padding: 1em;
	height: 292px;
`;

const Title = styled(motion.div)`
	padding: 0 0.2em;
	padding-bottom: 20px;
`;

const TitleText = styled.h4`
	font-family: 'Calibre', sans-serif;
	font-size: 22px;
	margin: 0;
	padding: 0.2em 0;
`;

const DateText = styled.span`
	font-family: 'Roboto', sans-serif;
`;

const Body = styled.div``;

const ListInfo = styled.ul``;

const Info = styled.li`
	padding-bottom: 30px;
`;

const ItemExperienceInfo = ({ selected, shouldShowBody }) => {
	return (
		<ExperienceInfo
			initial={{ opacity: 0 }}
			animate={{ opacity: shouldShowBody ? 1 : 0 }}
			transition={{ duration: 2.5 }}>
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
