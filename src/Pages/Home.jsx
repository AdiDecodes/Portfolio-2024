import React, {
	useEffect,
	useState,
	useRef,
} from 'react';
import styles from '../Styles/Home.module.scss';
import LocomotiveScroll from 'locomotive-scroll';
import Hero from '../Components/Hero';
import BottomBar from '../Components/BottomBar';
import About from '../Components/About';
import Technologies from '../Components/Technologies';
import CustomCursor from '../Components/Cursor.jsx';
import TopBar from '../Components/TopBar.jsx';
import Project from '../Components/Projects/Project.jsx';

const Home = () => {
	const scrollRef = useRef(null);
	const [scrollProgress, setScrollProgress] =
		useState(0);

	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll();

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
			locomotiveScroll.destroy();
			window.removeEventListener(
				'scroll',
				handleScroll
			);
		};
	}, []);

	return (
		<div ref={scrollRef}>
			<CustomCursor />
			<TopBar />
			<Hero />
			<About />
			<Technologies />
			<Project />
			<BottomBar progress={scrollProgress} />
		</div>
	);
};

export default Home;
