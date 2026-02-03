"use client";

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const images = [
	"/images/Liatris/Liatris_aspera2.jpg",
	"/images/Liatris/Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg",
	"/images/Liatris/jeffrey-hamilton-BLo2SfRwxqU-unsplash (1).jpg",
];

export function BlazingStarStorySection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const shouldReduceMotion = useReducedMotion();

	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const fadeUpVariant = {
		hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="blazing-star"
			ref={ref}
			className="relative py-32 px-6 bg-[#FAF9F6] text-stone-800 rounded-t-[5rem]"
		>
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
				{/* Left Column - Text */}
				<motion.div
					className="space-y-8"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={fadeUpVariant}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-4xl md:text-5xl font-serif text-stone-900">
						What is Blazing Star?
					</h2>
					<p className="text-xl text-stone-800 leading-relaxed">
						Blazing star, or <em>Liatris</em>, is a genus of perennial flowers
						native to North America. Prairie blazing star (
						<em>Liatris pycnostachya</em>) is an iconic prairie plant, blooming
						from midsummer onward. Rough blazing star (<em>Liatris aspera</em>)
						is hardy and tolerates drought and sandy and rocky soil. Blazing
						stars host numerous pollinators including bees, butterflies, moths,
						and even hummingbirds.
					</p>
				</motion.div>

				{/* Right Column - Slideshow */}
				<motion.div
					className="rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200/60"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				>
					<Image
						src={images[currentImage]}
						alt="Blazing Star flower"
						width={800}
						height={1000}
						className="object-cover w-full h-full"
						priority
					/>
				</motion.div>
			</div>
		</section>
	);
}
