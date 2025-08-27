import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
	return (
		<div className="bg-base-200 text-base-content min-h-screen flex flex-col">
			{/* Header */}
			<header className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-30">
				<div className="container mx-auto flex items-center justify-between py-4 px-6">
					<Link href="/" className="flex items-center">
						<Image src="/logo.png" alt="iogame.best Logo" width={40} height={40} className="mr-2" />
						<span className="font-bold text-xl text-blue-600">iogame.best</span>
					</Link>
					<nav className="flex gap-6 text-gray-700">
						<Link href="/" className="hover:text-blue-600 font-semibold">Home</Link>
						<Link href="/category" className="hover:text-blue-600">Categories</Link>
						<Link href="/about" className="hover:text-blue-600">About Us</Link>
						<Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
					</nav>
				</div>
			</header>

			{/* Banner */}
			<section className="bg-blue-600 text-white py-12 text-center">
				<h1 className="text-4xl font-bold mb-2">Play the Best IO Games Online</h1>
				<p className="text-lg">Instantly play top IO games for free. No download, no registration, just pure fun!</p>
			</section>

			{/* Featured Games */}
			<section className="container mx-auto py-10 px-4">
				<h2 className="text-2xl font-bold mb-6 text-center">Featured IO Games</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{/* Smash Karts */}
					<div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
						<Image src="https://prod.iogames.space/sites/default/files/SmashKartsIOGameSpace_v5.png" alt="Smash Karts" width={128} height={128} className="mb-4 rounded" />
						<h3 className="text-xl font-semibold mb-2">Smash Karts</h3>
						<p className="mb-4 text-center">Fast-paced kart racing and battle. Race, collect power-ups, and win!</p>
						<Link href="/games/smash-karts" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Play Now</Link>
					</div>
					{/* Krunker.io */}
					<div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
						<Image src="https://prod.iogames.space/sites/default/files/krunker.png" alt="Krunker.io" width={128} height={128} className="mb-4 rounded" />
						<h3 className="text-xl font-semibold mb-2">Krunker.io</h3>
						<p className="mb-4 text-center">Pixel-style FPS with fast matches and lots of action. Try it now!</p>
						<Link href="/games/krunker-io" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Play Now</Link>
					</div>
					{/* Deadshot */}
					<div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
						<Image src="https://prod.iogames.space/sites/default/files/field_name/iogamespace.png" alt="Deadshot" width={128} height={128} className="mb-4 rounded" />
						<h3 className="text-xl font-semibold mb-2">Deadshot</h3>
						<p className="mb-4 text-center">A fast-paced multiplayer shooter IO game. Test your skills and become the top shooter!</p>
						<Link href="/games/deadshot" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Play Now</Link>
					</div>
				</div>
			</section>

			{/* Game Categories */}
			<section className="container mx-auto py-10 px-4">
				<h2 className="text-2xl font-bold mb-6 text-center">Game Categories</h2>
				<div className="flex flex-wrap justify-center gap-4">
					<span className="bg-gray-200 px-4 py-2 rounded-full">Shooter</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full">Snake</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full">Racing</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full">Strategy</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full">Sports</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full">Classic</span>
					<span className="bg-gray-200 px-4 py-2 rounded-full">New Releases</span>
				</div>
			</section>

			{/* About iogame.best */}
			<section className="container mx-auto py-10 px-4">
				<h2 className="text-2xl font-bold mb-4 text-center">About iogame.best</h2>
				<p className="mb-4 text-center">iogame.best is dedicated to bringing you the best, newest, and most exciting free IO games. All games are playable instantly online, no download or registration required, and work on both PC and mobile devices. We update daily and feature the world's top IO games, including Slither.io, Shell Shockers, Smash Karts, and more.</p>
				<h3 className="text-xl font-semibold mb-2 text-center">What Are IO Games?</h3>
				<p className="mb-4 text-center">IO games are lightweight, browser-based multiplayer games that are easy to play and quick to join. Whether you love shooters, racing, strategy, or casual fun, you'll find your favorite IO games here at iogame.best!</p>
				<h3 className="text-xl font-semibold mb-2 text-center">Why Choose iogame.best?</h3>
				<ul className="list-disc pl-6 mb-4 max-w-2xl mx-auto">
					<li>Huge selection of top IO games, updated daily</li>
					<li>Completely free, no registration or download needed</li>
					<li>Works on all devices—play anytime, anywhere</li>
					<li>Safe, ad-free, and user-friendly experience</li>
				</ul>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-gray-200 py-6 mt-10">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
					<div className="mb-4 md:mb-0">
						&copy; 2025 iogame.best. All rights reserved.
					</div>
					<div className="space-x-6">
						<Link href="/faq" className="hover:text-white">FAQ</Link>
						<Link href="/about" className="hover:text-white">About Us</Link>
						<Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
						<Link href="/term-of-use" className="hover:text-white">Terms of Use</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
