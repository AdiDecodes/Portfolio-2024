import React, { useEffect, useRef } from 'react';
import styles from './Styles/Hero.module.scss';
import aditya from '../assets/aditya.jpg';
import { GoNorthStar } from 'react-icons/go';
import gsap from 'gsap';

const Hero = () => {
	const spanContainer = useRef(null);

	var color = '#131313';

	const spanData = [
		{
			id: 0,
			background: '#ffffff',
		},
		{
			id: 1,
			background: color,
		},
		{
			id: 2,
			background: '#fff',
		},
		{
			id: 3,
			background: color,
		},
		{
			id: 4,
			background: '#fff',
		},
		{
			id: 5,
			background: color,
		},
		{
			id: 6,
			background: '#fff',
		},
		{
			id: 7,
			background: color,
		},
		{
			id: 8,
			background: '#fff',
		},
		{
			id: 9,
			background: color,
		},
		{
			id: 10,
			background: '#fff',
		},
	];
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
				<div className={styles.scroller}>
					<div
						className={styles.linear}
						ref={spanContainer}
					>
						<span className={styles.loader}></span>
					</div>
					<GoNorthStar />
					<div className={styles.linear}>
						<span className={styles.loader}></span>
					</div>
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
