import React, {
	useEffect,
	useState,
} from 'react';
import styles from './Styles/TopBar.module.scss';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const TopBar = () => {
	const [time, setTime] = useState('');

	const getTime = () => {
		const date = new Date();
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		const strTime = `${hours
			.toString()
			.padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')} ${ampm}`;
		setTime(strTime);
	};

	useEffect(() => {
		getTime();
		const now = new Date();
		const delay =
			(60 - now.getSeconds()) * 1000 -
			now.getMilliseconds();

		const timeout = setTimeout(() => {
			getTime();
			const interval = setInterval(getTime, 60000); // Update every minute
			return () => clearInterval(interval); // Cleanup interval on unmount
		}, delay);

		return () => clearTimeout(timeout); // Cleanup timeout on unmount
	}, []);

	return (
		<div className={styles.main}>
			<p>ADITYA SINGH .</p>
			<div className={styles.time}>
				<p>{time}</p>
			</div>
			<div className={styles.contact}>
				<p>say hi</p>
				<MdOutlineArrowRightAlt />
				<p>singhaditya1826@gmail.com</p>
			</div>
		</div>
	);
};

export default TopBar;
