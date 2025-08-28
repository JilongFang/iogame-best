'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

// 统一的页脚链接配置，支持静态HTML页面
const staticFooterLinks = [
	{ name: 'Home', url: '/' },
	{ name: 'About Us', url: '/aboutus.html' },
	{ name: 'Contact Us', url: '/contactus.html' },
	{ name: 'Terms of Use', url: '/term-of-use.html' },
	{ name: 'Privacy Policy', url: '/privacy-policy.html' },
];

export default function Footer({ isStatic = false }) {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		if (isStatic) {
			// 静态页面使用固定链接
			setLinkList(staticFooterLinks);
			setLangName(defaultLocale);
		} else {
			// Next.js页面使用动态链接
			const fetchLinksList = async () => {
				if (pathname === '/') {
					setLangName(defaultLocale);
				} else {
					setLangName(pathname.split('/')[1]);
				}
				setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
			};
			fetchLinksList();
		}
	}, [pathname, langName, isStatic]);

	const footerClass = isStatic 
		? 'bg-gray-800 text-gray-200 py-6 mt-10'
		: 'w-full px-5 py-10 bg-[#202020] text-[#f7f7f7]';

	const logoSrc = isStatic ? '/public/logo.png' : '/logo.gif';
	const brandName = isStatic ? 'iogame.best' : 'Landing Page';

	return (
		<footer className={footerClass}>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm'>
				<div className='flex flex-col items-center md:items-start'>
					<a
						aria-label={isStatic ? 'iogame.best' : 'landing page template'}
						className='flex items-center mb-3'
						title={isStatic ? 'iogame.best' : 'landing page template'}
						href={isStatic ? '/' : `/${langName}`}
					>
						{isStatic ? (
							<>
								<img src={logoSrc} alt="logo" className="h-8 mr-2" />
								<span className="font-bold text-lg text-white">{brandName}</span>
							</>
						) : (
							<>
								<Image
									width={200}
									height={200}
									src={logoSrc}
									className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
									alt='logo'
								/>
								<h2 className='ml-3 font-bold leading-5'>{brandName}</h2>
							</>
						)}
					</a>
					<div className='flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1'>
						{linkList.map((link, index) => {
							return (
								<a
									key={index}
									title={link.name}
									href={isStatic ? link.url : `/${langName}${link.url}`}
									className={isStatic ? 'hover:text-blue-400 transition-colors' : ''}
								>
									{link.name}
								</a>
							);
						})}
					</div>
				</div>

				<div className="text-center">
					<p className="mb-2">
						© 2024{' '}
						{isStatic ? (
							<span className="font-semibold">iogame.best</span>
						) : (
							<a
								title={'huglemon'}
								href='http://huglemon.com?rel=landingpage'
								target='_blank'
								rel='noopener noreferrer'
							>
								hugLemon
							</a>
						)}{' '}
						{isStatic ? 'All rights reserved.' : 'present.'}
					</p>
					{isStatic && (
						<p className="text-xs text-gray-400">
							Best free IO games online - No download required
						</p>
					)}
				</div>
			</div>
		</footer>
	);
}
