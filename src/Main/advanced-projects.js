import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';

const Container = styled(motion.div)`
	padding-top: 150px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
	min-height: 90vh;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
`;

const AdvancedProjects = ({}) => {
	const [showAdvanced, setShowAdvanced] = useState(true);

	return <Container>Advanced</Container>;
};

export default AdvancedProjects;
