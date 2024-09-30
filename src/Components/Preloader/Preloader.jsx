import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './Preloader.module.scss';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Preloader = () => {
	const loaderRef = useRef(null);
	const [percentage, setPercentage] = useState(0);

	const holdTimer = async (delay) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, delay);
		});
	};

	const increaseCounter = async () => {
		setPercentage((prevPercentage) => {
			if (prevPercentage < 100) {
				return prevPercentage + 1;
			}
			return prevPercentage;
		});

		if (percentage === 60 || percentage === 85) {
			await holdTimer(500);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			increaseCounter();
		}, 20);

		return () => clearInterval(interval);
	}, [percentage]);

	useEffect(() => {
		console.log(percentage);
		gsap.to(loaderRef.current, {
			duration: 2,
			scaleY: percentage / 2.5,
			ease: 'none',
		});
	}, [percentage]);

	useGSAP(() => {
		if (percentage == 100) {
			const tl = gsap.timeline();
			tl
				.to(loaderRef.current, {
					delay: 0.5,
					duration: 1,
					transform: 'rotate(45deg)',
					transformOrigin: 'center',
				})
				.to(loaderRef.current, {
					duration: 1,
					scaleY: '150',
					ease: 'power1.inOut',
				})
				.to(loaderRef.current, {
					duration: 1,
					scaleX: '100',
					ease: 'power1.out',
				})
				.to(loaderRef.current, {
					duration: 1,
					scaleX: '2',
					ease: 'power1.out',
				})
				.to(loaderRef.current, {
					delay: 0.25,
					duration: 1,
					scaleX: '60',
					ease: 'power1.in',
				})
				.to(loaderRef.current, {
					duration: 1,
					scaleX: '80',
					ease: 'power1.out',
				})
				.to(loaderRef.current, {
					duration: 1,
					scaleX: '95',
					ease: 'power1.out',
				})
				.to(loaderRef.current, {
					delay: 0.25,
					duration: 0.75,
					scaleX: '20000',
					ease: 'power4.inOut',
				});
		}
	}, [percentage]);

	return (
		<div className={styles.main}>
			<div className={styles.parentHolder}>
				<p>{percentage}%</p>
				<div
					className={styles.verticalBar}
					ref={loaderRef}
				></div>
			</div>
		</div>
	);
};

export default Preloader;
