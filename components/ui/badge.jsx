import {cn} from "@/lib/utils";

const badgeTone = {
	blue: "bg-badge-blue text-badge-blue-foreground",
	green: "bg-badge-green text-badge-green-foreground",
	gold: "bg-badge-gold text-badge-gold-foreground",
	red: "bg-badge-red text-badge-red-foreground",
};

export const Badge = ({tone = "blue", className, children}) => (
	<span
		className={cn(
			"inline-flex h-6 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-bold",
			badgeTone[tone],
			className
		)}
	>
		{children}
	</span>
);
