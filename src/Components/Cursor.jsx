import React, {
	useEffect,
	useRef,
	useState,
} from 'react';
import { gsap } from 'gsap';
import './Styles/Customcursor.css';

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const followerRef = useRef(null);
	const [isHovering, setIsHovering] =
		useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			gsap.to(cursorRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0,
			});
			gsap.to(followerRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.2,
				scale: isHovering ? 2 : 1,
			});
		};

		const handleMouseEnter = () => {
			setIsHovering(true);
		};

		const handleMouseLeave = () => {
			setIsHovering(false);
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				gsap.to(cursorRef.current, {
					opacity: 0,
					duration: 0.2,
				});
				gsap.to(followerRef.current, {
					opacity: 0,
					duration: 0.2,
				});
			} else {
				gsap.to(cursorRef.current, {
					opacity: 1,
					duration: 0.2,
				});
				gsap.to(followerRef.current, {
					opacity: 1,
					duration: 0.2,
				});
			}
		};

		window.addEventListener(
			'mousemove',
			handleMouseMove
		);

		const textElements = document.querySelectorAll(
			'p, h1, h2, h3, h4, h5, h6, a'
		);
		textElements.forEach((el) => {
			el.addEventListener(
				'mouseenter',
				handleMouseEnter
			);
			el.addEventListener(
				'mouseleave',
				handleMouseLeave
			);
		});

		document.addEventListener(
			'visibilitychange',
			handleVisibilityChange
		);

		return () => {
			window.removeEventListener(
				'mousemove',
				handleMouseMove
			);
			textElements.forEach((el) => {
				el.removeEventListener(
					'mouseenter',
					handleMouseEnter
				);
				el.removeEventListener(
					'mouseleave',
					handleMouseLeave
				);
			});
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange
			);
		};
	}, [isHovering]);

	return (
		<>
			<div
				ref={cursorRef}
				className='custom-cursor'
			></div>
			<div
				ref={followerRef}
				className={`cursor-follower ${
					isHovering ? 'is-hovering' : ''
				}`}
			></div>
		</>
	);
};

export default CustomCursor;
