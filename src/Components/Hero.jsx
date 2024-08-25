import React from 'react';
import styles from './Styles/Hero.module.scss';
import aditya from '../assets/aditya.jpg';

const Hero = () => {
	return (
		<div className={styles.main}>
			<div className={styles.sectionOne}>
				<div className={styles.text}>
					<p>HELLO</p>
					<span className={styles.blockWrapper}>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
						<span className={styles.block}></span>
					</span>
				</div>
				<div className={styles.info}>
					<p>I'M</p>
				</div>
			</div>
			<div className={styles.sectionTwo}>
				<p>ADITYA</p>
				<p>SINGH</p>
			</div>
			<div className={styles.sectionThree}>
				<div className={styles.image}>
					<img
						src={aditya}
						alt=''
					/>
				</div>
				<div className={styles.textRight}>
					<div className={styles.text}>
						<p>FULL STACK</p>
					</div>
					<div className={styles.text}>
						<p>DEVELOPER</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
