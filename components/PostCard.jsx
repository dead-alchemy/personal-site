import Link from "next/link";

import {Badge} from "@/components/ui/badge";
import {ArrowRightIcon} from "@/components/icons";

const PostCard = ({url, category, tone, title, description, date}) => (
	<Link
		href={`/blog/${url}`}
		className="group flex flex-col gap-3.5 rounded-[14px] border border-border bg-card p-6 transition-colors hover:border-muted-foreground/40"
	>
		{category && <Badge tone={tone}>{category}</Badge>}
		<h3 className="text-lg leading-snug">{title}</h3>
		{description && (
			<p className="flex-1 text-sm leading-relaxed text-muted-foreground">
				{description}
			</p>
		)}
		<div className="flex items-center justify-between border-t border-border pt-3">
			<span className="text-[13px] text-muted-foreground">{date}</span>
			<span className="flex items-center gap-1 text-[13px] font-bold text-primary">
				Read post
				<ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
			</span>
		</div>
	</Link>
);

export default PostCard;
