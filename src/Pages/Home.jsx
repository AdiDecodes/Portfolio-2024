import React, {
	useEffect,
	useState,
} from 'react';
import styles from '../Styles/Home.module.scss';
import LocomotiveScroll from 'locomotive-scroll';
import Hero from '../Components/Hero';
import BottomBar from '../Components/BottomBar';
import About from '../Components/About';
import Technologies from '../Components/Technologies';
import CustomCursor from '../Components/Cursor.jsx';
import TopBar from '../Components/TopBar.jsx';

const Home = () => {
	// const locomotiveScroll = new LocomotiveScroll({
	// 	el: document.querySelector(
	// 		'[data-scroll-container]'
	// 	),
	// 	smooth: true,
	// 	smoothMobile: true,
	// 	getDirection: true,
	// });
	const [scrollProgress, setScrollProgress] =
		useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scrollPercent =
				(scrollTop / docHeight) * 100;
			setScrollProgress(scrollPercent);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener(
				'scroll',
				handleScroll
			);
		};
	}, []);

	return (
		<>
			<CustomCursor />
			<TopBar />
			<Hero />
			<About />
			<Technologies />
			<BottomBar progress={scrollProgress} />
		</>
	);
};

export default Home;
