import React, {
	useEffect,
	useState,
} from 'react';
import styles from './Contact.module.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdArrowOutward } from 'react-icons/md';
import { GoHeartFill } from 'react-icons/go';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { showToast } from '../Utils/toast';
import axios from 'axios';

const Contact = () => {
	const [tags, setTags] = useState([
		'PROJECT',
		'REDESIGN',
		'COLLABORATION',
		'OTHER',
	]);

	const [selectedTags, setSelectedTags] = useState(
		[]
	);

	const [sendButtonState, setSendButtonState] =
		useState('DEFAULT');

	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		purpose: [],
		title: '',
		message: '',
	});

	useEffect(() => {
		setContactData({
			...contactData,
			purpose: selectedTags,
		});
	}, [selectedTags]);

	const addItems = (tag) => {
		if (selectedTags.includes(tag)) {
			setSelectedTags(
				selectedTags.filter((item) => item !== tag)
			);
		} else {
			if (tag == 'OTHER') {
				setSelectedTags(['OTHER']);
				return;
			} else {
				if (selectedTags.includes('OTHER')) {
					const newTags = selectedTags.filter(
						(item) => item !== 'OTHER'
					);
					setSelectedTags([...newTags, tag]);
				} else {
					setSelectedTags([...selectedTags, tag]);
				}
			}
		}
	};

	const sendEmail = async () => {
		setSendButtonState('SENDING');
		const reqData = {
			method: 'POST',
			url: 'https://aditya-portfolio-backend.herokuapp.com/send-email',
			data: JSON.stringify(contactData),
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const response = await axios(reqData);
			if (response.status === 200) {
				setSendButtonState('DEFAULT');
				showToast(
					'Thank you for contacting me! I will write to you soon',
					'success'
				);
			}
		} catch (error) {
			console.log(error);
			setSendButtonState('DEFAULT');
			showToast(
				'Oh no! Something went wrong. Please try again later',
				'error'
			);
		}
	};

	const handleSubmit = () => {
		const validateEmail = (email) => {
			const re =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		};

		if (contactData.name === '') {
			showToast('Please enter your name', 'error');
			return;
		}
		if (contactData.email === '') {
			showToast('Please enter your email', 'error');
			return;
		}

		if (!validateEmail(contactData.email)) {
			showToast(
				'Please enter a valid email',
				'error'
			);
			return;
		}
		if (contactData.title === '') {
			showToast('Please enter your title', 'error');
			return;
		}
		if (contactData.purpose.length === 0) {
			showToast('Please select a purpose', 'error');
			return;
		}
		if (contactData.message === '') {
			showToast(
				'Please enter your message',
				'error'
			);
			return;
		}
		sendEmail();
	};

	return (
		<div className={styles.main}>
			<div className={styles.heading}>
				<h2>CONTACT</h2>
				<div className={styles.smallInfo}>
					<p>Let's Build Together</p>
					<IoIosArrowRoundForward />
				</div>
			</div>
			<div className={styles.contactWrapper}>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<p>YOUR NAME</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									name: e.target.value,
								});
							}}
						/>
					</div>
					<div className={styles.item}>
						<p>EMAIL</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									email: e.target.value,
								});
							}}
						/>
					</div>
					<div className={styles.item}>
						<p>TITLE</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									title: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.item}>
						<p>PURPOSE</p>
						<div className={styles.tags}>
							{tags.map((tag) => (
								<div
									className={
										selectedTags.includes(tag)
											? `${styles.tag} ${styles.tagSelected}`
											: `${styles.tag}`
									}
									data-hide-cursor='true'
									key={tag}
									onClick={() => addItems(tag)}
								>
									<p>{tag}</p>
								</div>
							))}
						</div>
					</div>
					<div className={styles.item}>
						<p>MESSAGE</p>
						<input
							type='text'
							placeholder=''
							onChange={(e) => {
								setContactData({
									...contactData,
									message: e.target.value,
								});
							}}
						/>
					</div>
					<div
						className={styles.buttonSubmit}
						onClick={handleSubmit}
					>
						{sendButtonState === 'SENDING' ? (
							<>
								<p>SENDING</p>
								<div className={styles.loader}></div>
							</>
						) : (
							<>
								<p>SUBMIT.</p>
								<MdArrowOutward />
							</>
						)}
					</div>
				</div>
			</div>
			<div
				className={styles.infoSection}
				data-hide-cursor='true'
			>
				<p>MADE WITH</p>
				<div className={styles.heartIcon}>
					<GoHeartFill />
				</div>
				<p> BY ADITYA</p>
			</div>
		</div>
	);
};

export default Contact;
