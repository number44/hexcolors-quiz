import { useEffect, useState } from 'react';
import styles from './app.module.scss';

function App() {
	const [color, setColor] = useState('#2c2c2c');
	const [colorsArr, setColorArr] = useState<string[]>([]);
	const [answer, setAnswer] = useState('false');
	const [nr, setNr] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);
	const generateRandomNumber = () => {
		let rnr = Math.floor(Math.random() * 256);
		return rnr;
	};
	const checkColor = (c: string) => {
		if (c === color) {
			setAnswer('true');
		} else {
			setAnswer('false');
		}
		setShowAnswer(true);
	};
	useEffect(() => {
		let newColorA = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		let newColorB = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		let newColorC = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		let newColorD = `#${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}${generateRandomNumber().toString(16)}`;
		const colorsArr = [newColorA, newColorB, newColorC, newColorD];
		setColorArr(colorsArr);
		let rnrAD = Math.floor(Math.random() * 4);
		setColor(colorsArr[rnrAD]);
	}, [answer]);
	return (
		<div className={styles.container}>
			<div className={styles.box} style={{ background: color }}></div>
			<div className={styles.grid}>
				{colorsArr?.map((c, index) => (
					<div onClick={() => checkColor(c)} key={index} className={styles['grid-box']}>
						{c}
					</div>
				))}
			</div>
			<div>{showAnswer && <h1 style={{ color: answer === 'false' ? 'red' : 'green' }}>Answer was {answer}</h1>}</div>
		</div>
	);
}

export default App;