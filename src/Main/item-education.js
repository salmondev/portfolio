import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { MinusOutline } from '@styled-icons/evaicons-outline/';
import { RightArrow } from '@styled-icons/boxicons-regular/';
import { dataEducation } from './data';

const SubItemContainer = styled(motion.div)`
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

const IconList = styled(motion.div)`
	position: absolute;
	svg {
		width: 15px;
		color: palevioletred;
		padding-right: 0.5em;
	}
`;

const SubEducationItems = ({ item }) => {
	return (
		<SubItemContainer
			initial='collapsed'
			animate='open'
			exit='collapsed'
			variants={{
				open: { opacity: 1, height: '50px' },
				collapsed: { opacity: 0, height: '0px' },
			}}
			transition={{ duration: 0.7, ease: 'circIn' }}>
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
			<motion.div
				animation={expand ? { y: '100%' } : { y: '0' }}
				transition={{ ease: 'easeOut', duration: 2 }}
				style={{ display: 'flex' }}>
				<AnimatePresence initial={false}>
					<IconList
						animate={{
							rotate: !expand ? -0 : 90,
							transformOrigin: '15% 50%',
						}}>
						<RightArrow />
					</IconList>
					<div style={{ paddingLeft: '1.3em' }}>
						{dataEducation[item].main}
						<AnimatePresence initial={false}>
							{expand ? <SubEducationItems expand={expand} item={item} /> : null}
						</AnimatePresence>
					</div>
				</AnimatePresence>
			</motion.div>
		</li>
	);
};

export default ItemEducationList;
