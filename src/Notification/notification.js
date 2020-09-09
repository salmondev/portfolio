import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ToastWrapper = styled.div`
	position: fixed;
	top: 20px;
	left: 20px;
	z-index: 9999;
`;

const Toast = styled.div`
	background: white;
	color: palevioletred;
	font-size: 17px;
	text-align: center;
	padding: 6px 8px;
	margin-bottom: 15px;
	border-radius: 10px;
	font-family: 'Asap', sans-serif;
`;

function Notification({ toast }) {
	return (
		<ToastWrapper>
			{toast.map((popup) => (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						exit={{ opacity: 0, y: -100 }}>
						<Toast>{popup}</Toast>
					</motion.div>
				</AnimatePresence>
			))}
		</ToastWrapper>
	);
}

export default Notification;
