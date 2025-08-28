import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeScript from '@/components/common/themeScript';
import Script from 'next/script';

const jakarta = Plus_Jakarta_Sans({
	weight: ['500', '800'],
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	const fontClass = jakarta.className || ''  // 确保有默认值
	
	return (
		<html lang="en" className={fontClass}>
			<body>
				<ThemeScript />
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4128447620867015"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
				<div className='w-full min-h-svh text-base-content bg-base-100'>
					{children}
				</div>
			</body>
		</html>
	);
}
