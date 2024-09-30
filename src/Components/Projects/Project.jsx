import React, { useState } from 'react';
import styles from './style.module.scss';
import techbucket from '../../assets/Projects/techbucket.png';
import cleverstudio from '../../assets/Projects/cleverstudio.png';
import igloaded from '../../assets/Projects/igloaded.png';
import vocalize from '../../assets/Projects/vocalize.png';
import { GoArrowRight } from 'react-icons/go';

const Project = () => {
	const projects = [
		{
			id: 1,
			name: 'TechBucket',
			description:
				'A tech blog that provides you with the latest tech news and reviews.',
			image: techbucket,
			url: 'https://techbucket.netlify.app/',
			year: '2024',
		},
		{
			id: 2,
			name: 'Clever Studio',
			description:
				'A web development agency that provides you with the best web development services.',
			image: cleverstudio,
			url: 'https://cleverstudio.netlify.app/',
			year: '2024',
		},
		{
			id: 3,
			name: 'IGLoaded',
			description:
				'A web app that helps you download Instagram photos and videos.',
			image: igloaded,
			url: 'https://igloaded.netlify.app/',
			year: '2023',
		},
		{
			id: 4,
			name: 'Vocalize (Under Development)',
			description:
				'Vocalize is a web based platform that supports realtime speech translation and captions for your meeting.',
			image: vocalize,
			url: '#',
			year: '2024',
		},
	];
	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2>PROJECTS</h2>
				<p>A LIST OF OG PROJECTS</p>
			</div>
			<div className={styles.projectWrapper}>
				{projects.map((project) => (
					<div
						key={project.id}
						className={styles.project}
					>
						<div className={styles.imageWrapper}>
							<img
								src={project.image}
								alt={project.name}
							/>
						</div>
						<div className={styles.bottom}>
							<p>{project.name}</p>
							<p>{project.year}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
