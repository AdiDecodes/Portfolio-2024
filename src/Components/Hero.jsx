import React, { useEffect, useRef } from 'react';
import styles from './Styles/Hero.module.scss';
import aditya from '../assets/aditya.jpg';
import { GoNorthStar } from 'react-icons/go';
import gsap from 'gsap';
import side from '../assets/side.webp';
import male from '../assets/male.jpg';
import bg1 from '../assets/bg-1.svg';
import bg2 from '../assets/bg-2.svg';
import { useGSAP } from '@gsap/react';

const Hero = () => {
	const imageref = useRef(null);

	useGSAP(
		() => {
			const t1 = gsap.timeline();
			t1.from(imageref.current.children[0], {
				scaleX: 0,
				duration: 0.75,
			});
			t1.from(imageref.current.children[1], {
				opacity: 0,
				transform: 'rotate(0deg)',
				duration: 0.25,
			});
			t1.from(imageref.current.children[2], {
				opacity: 0,
				transform: 'rotate(0deg)',
				duration: 0.25,
			});
			t1.play();
		},
		{
			dependencies: [],
		}
	);
	return (
		<div className={styles.main}>
			{/* <div className={styles.sectionOne}>
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
					<div className={styles.linear}>
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
						src={side}
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
			</div> */}

			<div
				className={styles.imageSection}
				ref={imageref}
			>
				<div className={styles.image}>
					<img
						src={male}
						alt=''
					/>
				</div>
				<div className={styles.image}>
					<img
						src={bg1}
						alt=''
					/>
				</div>
				<div className={styles.image}>
					<img
						src={bg2}
						alt=''
					/>
				</div>
			</div>
			<div className={styles.textSection}>
				<div
					className={styles.text}
					data-hide-cursor='true'
				>
					<h1>HELLO, I'M</h1>
				</div>
				<div
					className={styles.text}
					data-hide-cursor='true'
				>
					<p>ADITYA</p>
				</div>
				<div
					className={styles.text}
					data-hide-cursor='true'
				>
					<p>SINGH</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
