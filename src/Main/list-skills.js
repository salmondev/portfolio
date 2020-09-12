import React from 'react';
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
	width: 28%;
`;

const TextContainer = styled(motion.div)`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const ColumnText = styled(motion.span)`
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
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}
						color={'pink'}>
						Reactjs
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.2 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}>
						Styled Components
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}
						color={'pink'}>
						Javascript
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}>
						Bootstrap
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}>
						CSS
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}
						color={'pink'}>
						Redux
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}>
						HTML5
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}
						color={'pink'}>
						Hooks
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}
						color={'pink'}>
						Framer Motion
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}>
						Rest API
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.35 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}
						color={'pink'}>
						Threejs
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText
						whileHover={{ scaleY: 1.2 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 5,
							duration: 1,
						}}>
						React Transition Group
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
		</Container>
	);
};

export default Education;
