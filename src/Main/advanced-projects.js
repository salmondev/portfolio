import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CarbonFootprint from '../assets/carbon-footprint.png';
import MarcoPolo from '../assets/marco-polo.png';
import Wanteat from '../assets/wanteat.png';
import NinjaSimulation from '../assets/ninja-simulation.png';
import AmmoTank from '../assets/ammo-tank.png';

const Container = styled(motion.div)`
	padding-top: 2em;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	width: 100%;
`;

const Row = styled.div`
	padding: 4em 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const LeftRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-end' : 'flex-start')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '200px' : '300px')};
	border-radius: 5px;
	padding: 15px;
`;

const LeftCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 85%;
	height: 200px;
	height: 200px;
	border-radius: 5px;
	padding: 15px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
`;

const RightRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-start' : 'flex-end')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '200px' : '300px')};
	border-radius: 5px;
	padding: 15px;
`;

const RightCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 85%;
	height: 200px;
	height: 200px;
	border-radius: 5px;
	padding: 15px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
`;

const ImgContainer = styled.div`
	width: 500px;
	height: 300px;
`;

const Img = styled.img`
	height: 100%;
`;

const AdvancedProjects = ({}) => {
	return (
		<Container
			animate={{ opacity: [0, 1], duration: 0.2 }}
			exit={{ opacity: [1, 0], duration: 0.2 }}
			transition={{ duration: 0.2 }}>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={CarbonFootprint} alt='carbon-footprint' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<RightCard />
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={true}>
					<LeftCard />
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={Wanteat} alt='wanteat' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={NinjaSimulation} alt='ninja-simulation' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<RightCard></RightCard>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={true}>
					<LeftCard />
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={MarcoPolo} alt='marco-polo' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={AmmoTank} alt='ammo-tank' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<RightCard></RightCard>
				</RightRow>
			</Row>
		</Container>
	);
};

export default AdvancedProjects;
