'use client';

import { Canvas } from '@react-three/fiber';

import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<Canvas>
				<ambientLight intensity={0.1} />
				<directionalLight color='red' position={[0, 0, 5]} />

				<mesh>
					<boxGeometry />
					<meshStandardMaterial />
				</mesh>
			</Canvas>
		</main>
	);
}
