'use client';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { useEffect, useState } from 'react';
import ThemeToggle from './themeToggle';
import LangSwitch from './langSwitch';

import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';

// 统一的导航链接配置，支持静态HTML页面
const staticNavLinks = [
	{ name: 'Home', url: '/' },
	{ name: 'About Us', url: '/aboutus.html' },
	{ name: 'Contact Us', url: '/contactus.html' },
	{ name: 'FAQ', url: '/faq.html' },
	{ name: 'Privacy Policy', url: '/privacy-policy.html' },
];

export default function Navbar({ isStatic = false, currentPath = '/' }) {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		if (isStatic) {
			// 静态页面使用固定链接
			setLinkList(staticNavLinks);
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

	// 统一的样式类
	const headerClass = isStatic 
		? 'w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-30'
		: 'w-full relative z-50 bg-base-100 p-5 pb-0 container mx-auto md:mb-5 flex justify-between items-center';

	const containerClass = isStatic 
		? 'container mx-auto flex items-center justify-between py-4 px-6'
		: '';

	const logoSrc = isStatic ? '/public/logo.png' : '/logo.gif';
	const brandName = isStatic ? 'iogame.best' : 'Landing Page';

	return (
		<header className={headerClass}>
			{isStatic && <div className={containerClass}>}
			<a
				aria-label={isStatic ? 'iogame.best' : 'landing page template'}
				className={isStatic ? 'flex items-center' : 'flex items-center w-1/2 md:w-1/5'}
				title={isStatic ? 'iogame.best' : 'landing page template'}
				href={isStatic ? '/' : `/${langName}`}
			>
				{isStatic ? (
					<>
						<img src={logoSrc} alt="logo" className="h-10 mr-2" />
						<span className="font-bold text-xl text-blue-600">{brandName}</span>
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

			{isStatic ? (
				<nav className="flex gap-6 text-gray-700">
					{linkList.map((link, index) => (
						<a
							key={index}
							href={link.url}
							className={`hover:text-blue-600 ${currentPath === link.url ? 'font-semibold' : ''}`}
						>
							{link.name}
						</a>
					))}
				</nav>
			) : (
				<>
					<ul className='w-3/5 px-5 font-medium hidden md:flex flex-nowrap items-center justify-around'>
						{linkList.map((link, index) => {
							return (
								<li
									key={index}
									className='group py-3 text-center'
								>
									<a
										aria-label={link.name}
										className='group relative'
										title={link.name}
										href={`/${langName}${link.url}`}
									>
										{link.name}
										<div className='absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90'></div>
									</a>
								</li>
							);
						})}
					</ul>

					<div className='md:w-1/5 flex items-center justify-end gap-2'>
						<label className='flex items-center justify-center md:bg-base-100 md:rounded-full w-5 md:w-8 h-5 md:h-8 md:shadow-sm md:hover:shadow-md transition-all'>
							<a
								aria-label='get template source code'
								title='get template source code'
								href='https://github.com/huglemon/inwind-landing-page'
							>
								<SiGithub size={14} />
							</a>
						</label>
						<ThemeToggle />
						<LangSwitch />
						<details className='flex md:hidden dropdown dropdown-end'>
							<summary className='btn btn-ghost p-0'>
								<MdMenu size={18} />
							</summary>
							<ul className='menu dropdown-content z-[100] p-2 shadow bg-base-100 opacity-100 rounded-box w-52'>
								{linkList.map((link, index) => {
									return (
										<li key={index}>
											<a
												aria-label={link.name}
												title={link.name}
												href={`/${langName}${link.url}`}
											>
												{link.name}
											</a>
										</li>
									);
								})}
							</ul>
						</details>
					</div>
				</>
			)}
			{isStatic && </div>}
		</header>
	);
}
