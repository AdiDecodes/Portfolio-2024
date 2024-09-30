import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './Social.module.scss';
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { CiCoffeeCup } from 'react-icons/ci';
import { GoArrowUpRight } from 'react-icons/go';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

//Github Images
import github1 from '../../assets/Socials/Github/gh-profile.png';
import github2 from '../../assets/Socials/Github/github-dark.png';
import github3 from '../../assets/Socials/Github/github-print.png';
import github4 from '../../assets/Socials/Github/Github.png';

//Instagram Images
import insta1 from '../../assets/Socials/Instagram/Instagram-wall.png';
import insta2 from '../../assets/Socials/Instagram/Instagram-dark.png';
import insta3 from '../../assets/Socials/Instagram/Instagram-print.png';
import insta4 from '../../assets/Socials/Instagram/instagram.png';

//LinkedIn Images
import linkedin1 from '../../assets/Socials/LinkedIn/Linkedin-profile.png';
import linkedin2 from '../../assets/Socials/LinkedIn/Linkedin-dark.png';
import linkedin3 from '../../assets/Socials/LinkedIn/Linkedin-print.png';
import linkedin4 from '../../assets/Socials/LinkedIn/Linkedin.png';

// Email Images
import email1 from '../../assets/Socials/Email/email-profile.svg';
import email2 from '../../assets/Socials/Email/email-dark.svg';
import email3 from '../../assets/Socials/Email/email-print.svg';
import email4 from '../../assets/Socials/Email/email.svg';

// Coffee Images
import coffee1 from '../../assets/Socials/BMAC/bmac-profile.svg';
import coffee2 from '../../assets/Socials/BMAC/coffee2.png';
import coffee3 from '../../assets/Socials/BMAC/bmac-print.svg';
import coffee4 from '../../assets/Socials/BMAC/coffee1.png';

const Social = () => {
	const overLayRef = useRef(null);
	const [hover, setHover] = useState({
		id: -1,
		icon: null,
		name: '',
		link: '',
		images: [],
	});

	const [socials, setSocials] = useState([
		{
			id: 1,
			icon: <FaGithub />,
			name: 'Github.',
			link: 'https://www.github.com/adidecodes',
			images: [github1, github2, github3, github4],
		},
		{
			id: 2,
			icon: <FaInstagram />,
			name: 'Instagram.',
			link: 'https://www.instagram.com/adit.yaml',
			images: [insta1, insta2, insta3, insta4],
		},
		{
			id: 3,
			icon: <FaLinkedinIn />,
			name: 'LinkedIn.',
			link:
				'https://www.linkedin.com/in/singhaditya18',
			images: [
				linkedin1,
				linkedin2,
				linkedin3,
				linkedin4,
			],
		},
		{
			id: 4,
			icon: <MdEmail />,
			name: 'Email.',
			link: 'mailto:singhaditya1826@gmail.com',
			images: [email1, email2, email3, email4],
		},
		{
			id: 5,
			icon: <CiCoffeeCup />,
			name: 'Buy Me A Coffee.',
			link:
				'https://www.buymeacoffee.com/adidecodes',
			images: [coffee1, coffee2, coffee3, coffee4],
		},
	]);

	useGSAP(
		() => {
			if (hover.id == -1) {
				const images =
					overLayRef.current.querySelectorAll('img');

				gsap.to(overLayRef.current, {
					opacity: 0,
					duration: 0.5,
					ease: 'power4.out',
				});

				images.forEach((image, index) => {
					gsap.to(image, {
						scale: 0,
						opacity: 0,
						duration: 0.3,
						delay: index * 0.1,
						ease: 'power4.inOut',
					});
				});
				return;
			}

			gsap.to(overLayRef.current, {
				opacity: 1,
				duration: 0.5,
				ease: 'power4.out',
			});

			const images =
				overLayRef.current.querySelectorAll('img');

			if (images.length > 0) {
				const hoverId = hover?.id;
				const mapping = {
					1: ['5%', '5%', '5%', '5%'],
					2: ['30%', '30%', '30%', '30%'],
					3: ['60%', '60%', '60%', '60%'],
					4: ['90%', '90%', '90%', '90%'],
					5: ['120%', '120%', '120%', '120%'],
					6: ['150%', '150%', '150%', '150%'],
				};

				images.forEach((image, index) => {
					image.src = hover.images[index]; // Set the src attribute first
					gsap.to(image, {
						y: mapping[hoverId][index],
						scale: 1.5,
						opacity: 0.5,
						duration: 0.3,
						ease: 'power4.inOut',
						delay: index * 0.1,
					});
				});
			}
		},
		{
			dependencies: [hover],
		}
	);

	const getHoverData = (id) => {
		if (id === -1) {
			setHover({
				id: -1,
				name: '',
				icon: '',
				link: '',
				images: [],
			});
			return;
		}
		setHover(socials[id - 1]);
	};

	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2>SOCIALS</h2>
				<div className={styles.smallInfo}>
					<p>FOLLOW ME ON SOCIALS</p>
					<IoIosArrowRoundForward />
				</div>
			</div>
			<div className={styles.socialWrapper}>
				{socials.map((social) => {
					return (
						<div
							className={styles.socialItem}
							key={social.id}
							onClick={() => {
								window.open(social.link, '_blank');
							}}
						>
							<p
								onMouseEnter={() => {
									getHoverData(social.id);
								}}
								onMouseLeave={() => {
									getHoverData(-1);
								}}
							>
								{social.name}
							</p>
						</div>
					);
				})}
				<div
					className={styles.overlay}
					ref={overLayRef}
				>
					<img alt='' />
					<img alt='' />
					<img alt='' />
					<img alt='' />
				</div>
			</div>
		</div>
	);
};

export default Social;
