import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MinusOutline } from '@styled-icons/evaicons-outline/';
import { RightArrow } from '@styled-icons/boxicons-regular/';
import { dataEducation } from './data';

const SubItemContainer = styled.div`
	padding-left: 10px;
	height: 50px;
	padding-bottom: 5px;
`;

const ExpandContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 20px;
`;

const DetailsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 20px;
	padding: 5px 0px;
`;

const SubItem = styled.span`
	margin: 0;
	padding: 0;
	font-size: 15px;
	font-family: 'Roboto', sans-serif;
`;

const SubItemIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 2px;
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
			<ExpandContainer>
				<SubItem>{dataEducation[item].expand}</SubItem>
			</ExpandContainer>
			<DetailsContainer>
				<SubItem>{dataEducation[item].date}</SubItem>
				<SubItemIcon>
					<MinusOutline />
				</SubItemIcon>
				<SubItem>{dataEducation[item].country}</SubItem>
			</DetailsContainer>
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
					{dataEducation[item].main}
					{expand ? <SubEducationItems item={item} /> : null}
				</div>
			</div>
		</li>
	);
};

export default ItemEducationList;
