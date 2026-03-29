import { InfiniteSlider } from "@/components/ui/infinite-slider";
import tharagai from "@/assets/clients/tharagai.webp";
import bluefin from "@/assets/clients/bluefin.png";

export function LogoCloud() {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<div className="mb-10 flex flex-col items-center gap-6">
				<h2 className="text-center text-2xl md:text-3xl font-medium tracking-tight text-muted-foreground">
					Trusted by experts.<br />
					<span className="font-bold text-foreground">Used by the leaders.</span>
				</h2>
			</div>
			<div className="mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden py-4 w-full max-w-6xl border">
				<InfiniteSlider gap={100} speed={80} speedOnHover={25}>
					{logos.map((logo) => (
						<a href={logo?.targetAddr} target="_blank" no-referer>
							<img
								alt={logo.alt}
								className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
								height="auto"
								key={`logo-${logo.alt}`}
								loading="lazy"
								src={logo.src}
								width="auto"
							/>
						</a>
					))}
				</InfiniteSlider>
			</div>
		</div>
	);
}

const logos = [
	{
		src: tharagai,
		alt: "Tharagai",
		targetAddr: 'https://tharagaiboutique.com/'
	},
	{
		src: bluefin,
		alt: "BLUEFIN ENGINEERING ENTERPRISES",
		targetAddr: 'https://bfee.co.in/'
	},
	{
		src: "https://storage.efferd.com/logo/openai-wordmark.svg",
		alt: "OpenAI Logo",
	}
];
