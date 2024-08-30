import React, { useEffect } from 'react';
import styles from './Styles/BottomBar.module.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BottomBar = ({ progress }) => {
	const navigate = useNavigate();
	const openLink = (path = '/') => {
		navigate(path);
	};

	return (
		<div className={styles.main}>
			<div
				className={styles.progressBar}
				style={{ width: `${progress}%` }}
			></div>
			<div className={styles.copyright}>
				<p>Aditya Singh © 2024</p>
			</div>
			<div className={styles.links}>
				<Link to='/AboutMe'>ABOUT ME</Link>
				<Link to='/Projects'>PROJECTS</Link>
				<Link to='/Courses'>COURSES</Link>
				<Link to='/Technology'>TECHNOLOGY</Link>
			</div>
			<div className={styles.contactButton}>
				<p>CONTACT</p>
				<span></span>
			</div>
		</div>
	);
};

export default BottomBar;
