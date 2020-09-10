import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MinusOutline } from '@styled-icons/evaicons-outline/';
import { RightArrow } from '@styled-icons/boxicons-regular/';
import { data } from './data-work';

const SubItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 35px;
	height: 20px;
	padding-bottom: 1em;
`;

const SubItem = styled.span`
	margin: 0;
	padding: 0;
	font-size: 15px;
	font-family: 'Asap', sans-serif;
`;

const SubItemIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 10px;
	height: 22px;
	color: #ffffff8c;
	svg {
		width: 30px;
	}
`;

const IconList = styled.div`
	svg {
		width: 15px;
		color: palevioletred;
		padding-right: 0.5em;
	}
`;

const SubEducationItems = ({ item }) => {
	return (
		<SubItemContainer>
			<SubItem>{data.education[item].expand}</SubItem>
			<SubItemIcon>
				<MinusOutline />
			</SubItemIcon>
			<SubItem>{data.education[item].date}</SubItem>
			<SubItemIcon>
				<MinusOutline />
			</SubItemIcon>
			<SubItem>{data.education[item].country}</SubItem>
		</SubItemContainer>
	);
};

const ItemEducationList = ({ item, index }) => {
	const [expand, setExpand] = useState(false);

	const handleClick = () => {
		const oldState = expand;
		setExpand(!oldState);
		return;
	};

	return (
		<li key={index} onClick={handleClick}>
			<div style={{ display: 'flex' }}>
				<IconList>
					<RightArrow />
				</IconList>
				<div>
					{data.education[item].main}
					{expand ? <SubEducationItems item={item} /> : null}
				</div>
			</div>
		</li>
	);
};

export default ItemEducationList;
