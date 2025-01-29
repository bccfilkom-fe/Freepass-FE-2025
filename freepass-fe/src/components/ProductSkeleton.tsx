import { motion } from "framer-motion";

export function ProductSkeleton() {
    return (
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <motion.div
                className="h-48 w-full bg-gray-200 dark:bg-gray-700"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />
            <div className="p-4">
                <motion.div
                    className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    );
}

export function ProductSkeletonGrid() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
                <ProductSkeleton key={index} />
            ))}
        </div>
    );
}
