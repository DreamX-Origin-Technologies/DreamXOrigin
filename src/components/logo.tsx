import type React from "react";
import logoImg from '@/assets/logo.svg'

export const LogoIcon = (props: React.ComponentProps<"image">) => (
	 <img src={logoImg} className="w-10" />
);

export const Logo = (props: React.ComponentProps<"image">) => (
	 <img src={logoImg} className="w-10" />
);
