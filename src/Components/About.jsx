import React from 'react';
import styles from './Styles/About.module.scss';
import { BsArrow90DegRight } from 'react-icons/bs';
import aditya from '../assets/aditya.jpg';

const About = () => {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.titleOne}>
					<p>ABOUT</p>
				</div>
				<div className={styles.titleTwo}>
					<p>ME</p>
				</div>
				<div className={styles.subtext}>
					<p>I have been working since 2022</p>
				</div>
				<div className={styles.image}>
					<img
						src={aditya}
						alt=''
					/>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.roleWrapper}>
					<div className={styles.itemOne}>
						<BsArrow90DegRight />
						<p>Web Designer</p>
					</div>
					<div className={styles.itemOne}>
						<BsArrow90DegRight />
						<p>Mentor</p>
					</div>
					<div className={styles.itemOne}>
						<BsArrow90DegRight />
						<p>Developer</p>
					</div>
				</div>
				<div className={styles.description}>
					<p>
						A LEARNING DATA SCIENTIST HAVING SOME SKILLS
						IN THE PARTICULAR FIELD. ALONG WITH THAT, I
						HAVE INTEREST IN WEB DEVELOPMENT WITH A
						PASSION FOR CREATING VISUALLY STUNNING AND
						INTUITIVE WEBSITES. YOU CAN FIND ME
						TINKERING WITH NEW FRAMEWORKS AND TOOLS, OR
						COLLABORATING WITH FELLOW DEVELOPERS ON OPEN
						SOURCE PROJECTS . I AM EXCITED TO BRING MY
						SKILLS AND EXPERIENCE TO NEW CHALLENGES AND
						AM ALWAYS LOOKING FOR OPPORTUNITIES TO
						COLLABORATE AND CREATE AMAZING WEBSITES.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
