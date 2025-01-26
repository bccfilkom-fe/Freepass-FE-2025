import { cn } from "@/shared/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import type { TabLabel } from "../data/tabs";

type Props = {
	label: TabLabel;
	isActive: boolean;
	onClick: () => void;
	onHover: (isHovered: boolean) => void;
	isHovered: boolean;
};

export default function Tab({
	label,
	isActive,
	onClick,
	onHover,
	isHovered,
}: Props) {
	return (
		<motion.button
			layout
			onClick={onClick}
			onMouseEnter={() => onHover(true)}
			onMouseLeave={() => onHover(false)}
			className={cn(
				"p-2 relative text-foreground/60 transition-colors flex-shrink-0",
				(isActive || isHovered) && "text-foreground",
			)}
		>
			{label}
			<AnimatePresence>
				{(isActive || isHovered) && (
					<motion.div
						className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
						layoutId="underline"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 30,
						}}
					/>
				)}
			</AnimatePresence>
		</motion.button>
	);
}
