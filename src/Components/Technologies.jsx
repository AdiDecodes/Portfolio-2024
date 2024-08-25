import React, {
	useState,
	useEffect,
} from 'react';
import styles from './Styles/Technologies.module.scss';
import { GoArrowUpRight } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';

const Technologies = () => {
	const [technologies, setTechnologies] = useState(
		[
			{
				id: 1,
				name: 'HTML',
				url: 'https://www.w3schools.com/html/',
			},
			{
				id: 2,
				name: 'CSS / SCSS',
				url: 'https://www.w3schools.com/css/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 12,
				name: 'GSAP',
				url: 'https://greensock.com/gsap/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 3,
				name: 'JavaScript',
				url: 'https://www.w3schools.com/js/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 4,
				name: 'React.js',
				url: 'https://reactjs.org/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 5,
				name: 'Node.js',
				url: 'https://nodejs.org/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 6,
				name: 'Express.js',
				url: 'https://expressjs.com/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 7,
				name: 'MongoDB',
				url: 'https://www.mongodb.com/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 8,
				name: 'Redis',
				url: 'https://redis.io/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 9,
				name: 'GraphQL',
				url: 'https://graphql.org/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 10,
				name: 'Docker',
				url: 'https://www.docker.com/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
			{
				id: 11,
				name: 'Kubernetes',
				url: 'https://kubernetes.io/',
				image:
					'https://www.w3schools.com/images/w3schools_green.jpg',
			},
		]
	);

	const [currentHovered, setCurrentHovered] =
		useState(null);

	// useEffect(() => {
	// 	const itemClassName = `.${styles.item.replace(
	// 		/ /g,
	// 		'.'
	// 	)}`;
	// 	Shery.hoverWithMediaCircle(itemClassName, {
	// 		images: [
	// 			'https://cdn.hashnode.com/res/hashnode/image/upload/v1671464724449/8UIfwdzWN.png',
	// 			'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fskill_page%2F40962%2Flogo%2Foptimized%2FCSS-7180db2b35a5dc8e8e9e60729b54de02.png',
	// 		],
	// 	});
	// }, []);

	return (
		<div className={styles.main}>
			<div className={styles.titleWrapper}>
				<p>Technology stack I use often</p>
				<h2>TECHNOLOGIES</h2>
			</div>
			<div className={styles.itemWrapper}>
				{technologies.map((technology) => (
					<div
						key={technology.id}
						className={
							currentHovered != technology.id
								? `${styles.item}`
								: `${styles.item} ${styles.itemHover}`
						}
						onMouseEnter={() => {
							setCurrentHovered(technology.id);
						}}
						onMouseLeave={() => {
							setCurrentHovered(null);
						}}
					>
						<p>
							{technology.name}{' '}
							{currentHovered == technology.id && (
								<GoHeartFill />
							)}
						</p>
						<div className={styles.icon}>
							<GoArrowRight />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Technologies;
