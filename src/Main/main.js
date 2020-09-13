import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

const Main = ({ didScroll, handleToast, heroRef, expRef, skillsRef, projectRef, contactRef }) => {
	return (
		<>
			<Hero didScroll={didScroll} handleToast={handleToast} heroRef={heroRef} />
			<Experience expRef={expRef} />
			<Skills skillsRef={skillsRef} />
			<Projects projectRef={projectRef} />
			<Contact contactRef={contactRef} />
		</>
	);
};

export default Main;
