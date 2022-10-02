import { useEffect, useState } from 'react';
import styles from './app.module.scss';

function App() {
	const [color, setColor] = useState('#2c2c2c');
	const [colorsArr, setColorArr] = useState<string[]>([]);
	const [answer, setAnswer] = useState('false');
	const [nr, setNr] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);
	const [attempts, setAttempts] = useState(0);
	const [colortype, setColortype] = useState('rgb');
	const generateRandomNumber = () => {
		let rnr = Math.floor(Math.random() * 256);
		return rnr;
	};
	const checkColor = (c: string) => {
		if (c === color) {
			setAnswer('true');
			setNr((n) => n + 1);
		} else {
			setAnswer('false');
		}
		setAttempts((a) => a + 1);
		setShowAnswer(true);
	};
	const restart = () => {
		let hexA = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		let hexB = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		let hexC = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		let hexD = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		let rgbA = `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
		let rgbB = `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
		let rgbC = `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
		let rgbD = `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;

		let newColorA = colortype === 'rgb' ? rgbA : hexA;
		let newColorB = colortype === 'rgb' ? rgbB : hexB;
		let newColorC = colortype === 'rgb' ? rgbC : hexC;
		let newColorD = colortype === 'rgb' ? rgbD : hexD;

		const colorsArr = [newColorA, newColorB, newColorC, newColorD];
		setColorArr(colorsArr);
		let rnrAD = Math.floor(Math.random() * 4);
		setColor(colorsArr[rnrAD]);
	};
	const changeColorType = (ct: string) => {
		setAttempts(0);
		setNr(0);
		setColortype(ct);
	};
	useEffect(() => {
		restart();
	}, [nr, colortype]);
	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				<div onClick={() => changeColorType('rgb')} className={styles['grid-box']}>
					RGB
				</div>
				<div onClick={() => changeColorType('hex')} className={styles['grid-box']}>
					HEX
				</div>
			</div>

			<h2>choose correct color </h2>
			<div className={styles.box} style={{ background: color }}></div>
			<div className={styles.grid}>
				{colorsArr?.map((c, index) => (
					<div onClick={() => checkColor(c)} key={index} className={styles['grid-box']}>
						{c}
					</div>
				))}
			</div>
			<div>{showAnswer && <h1 style={{ color: answer === 'false' ? 'red' : 'green' }}>Answer was {answer === 'true' ? 'correct' : 'incorrect'}</h1>}</div>
			<h2>Correct answers : {nr}</h2>
			<h2>Attempts : {attempts}</h2>
		</div>
	);
}

export default App;
