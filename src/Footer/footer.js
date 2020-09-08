import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-size: 20px;
	color: white;
	padding: 1rem 0;
	font-family: 'Asap', sans-serif;
`;

const Text = styled.div`
	text-align: center;
`;

const Footer = () => {
	return (
		<Container>
			<Text>'All this projects are powered by a lot of ☕️'</Text>
		</Container>
	);
};

export default Footer;
