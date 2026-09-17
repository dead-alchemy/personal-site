import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {Menu, X} from "lucide-react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {socialLinks} from "@/lib/social-links";

const links = [
	{href: "/", label: "Home"},
	{href: "/blog", label: "Blog"},
	{href: "/aboutme", label: "About Me"},
	{href: "/resume", label: "Resume"},
];

const isActive = (pathname, href) =>
	href === "/" ? pathname === "/" : pathname.startsWith(href);

const Nav = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	return (
		<header className="w-full border-b border-border bg-background">
			<div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between gap-6 px-4 sm:px-8">
				<Link href="/" className="flex shrink-0 items-center gap-2.5">
					<span className="size-2.5 rounded-full bg-accent" />
					<span
						className="text-lg"
						style={{fontFamily: "'secular-one', sans-serif"}}
					>
						David Nicholas
					</span>
				</Link>

				<ul className="hidden items-center gap-7 sm:flex">
					{links.map(({href, label}) => {
						const active = isActive(router.pathname, href);
						return (
							<li key={href}>
								<Link
									href={href}
									className={cn(
										"border-b-2 border-transparent px-0.5 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
										active && "border-accent font-bold text-foreground"
									)}
								>
									{label}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className="hidden shrink-0 items-center gap-1 sm:flex">
					{socialLinks.map(({href, label, Icon}) => (
						<a
							key={href}
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}
							className="flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
						>
							<Icon width="18" height="18" />
						</a>
					))}
				</div>

				<Button
					variant="ghost"
					size="icon"
					className="sm:hidden"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					onClick={() => setOpen((prevState) => !prevState)}
				>
					{open ? <X /> : <Menu />}
				</Button>
			</div>

			{open && (
				<div className="border-t border-border px-4 py-3 sm:hidden">
					<ul className="flex flex-col gap-1">
						{links.map(({href, label}) => {
							const active = isActive(router.pathname, href);
							return (
								<li key={href}>
									<Link
										href={href}
										onClick={() => setOpen(false)}
										className={cn(
											"block rounded-md border-l-2 border-transparent px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
											active && "border-accent font-bold text-foreground"
										)}
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="mt-2 flex items-center gap-1 border-t border-border pt-2">
						{socialLinks.map(({href, label, Icon}) => (
							<a
								key={href}
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}
								className="flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
							>
								<Icon width="18" height="18" />
							</a>
						))}
					</div>
				</div>
			)}
		</header>
	);
};

export default Nav;
