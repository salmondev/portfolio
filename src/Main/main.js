import React from 'react';
import styled from 'styled-components';
import Hero from './hero';

const Main = ({ didScroll, handleToast }) => {
	return <Hero didScroll={didScroll} handleToast={handleToast} />;
};

export default Main;
