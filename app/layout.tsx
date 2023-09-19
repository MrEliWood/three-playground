import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Three Playground',
	description: 'Workspace for testing three.js'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
