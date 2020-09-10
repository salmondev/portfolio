import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

const Main = ({ didScroll, handleToast }) => {
	return (
		<>
			<Hero didScroll={didScroll} handleToast={handleToast} />
			<Experience />
			<Education />
			<Projects />
			<Contact />
		</>
	);
};

export default Main;
