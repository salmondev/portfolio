import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

const Main = ({ didScroll, handleToast }) => {
	return (
		<>
			<Hero didScroll={didScroll} handleToast={handleToast} />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
};

export default Main;
