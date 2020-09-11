import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	width: 65%;
	display: flex;
	justify-content: space-evenly;
	align-items: baseline;
	padding-top: 3em;
	height: 200px;
`;

const SkillsColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const TextContainer = styled.div`
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const ColumnText = styled.span`
	color: white;
	color: ${(props) => (props.color === 'pink' ? 'palevioletred' : 'white')};
	text-align: center;
	flex: 0 0 175px;
	font-size: 18px;
	font-weight: 700;
	width: 100%;
	letter-spacing: 2px;
	font-family: 'Calibre', sans-serif;
	cursor: pointer;
`;

const Education = ({}) => {
	return (
		<Container>
			<SkillsColumn>
				<TextContainer>
					<ColumnText color={'pink'}>Reactjs</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText>Styled Components</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText color={'pink'}>Javascript</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText>Bootstrap</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText>CSS</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText color={'pink'}>Redux</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText>HTML5</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText color={'pink'}>Hooks</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText color={'pink'}>Framer Motion</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText>Rest API</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText color={'pink'}>Threejs</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText>React Transition Group</ColumnText>
				</TextContainer>
			</SkillsColumn>
		</Container>
	);
};

export default Education;
