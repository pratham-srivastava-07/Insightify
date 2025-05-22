import { useRouter } from "next/navigation";

interface PaginationProps {
    page: number;
    hasPrev: boolean;
    hasNext: boolean;
}

const Pagination = ({ page, hasPrev, hasNext }: PaginationProps) => {
    const router = useRouter();

    const goToPage = (pageNumber: number) => {
        router.push(`?page=${pageNumber}`);
    };

    return (
        <div className="flex justify-between">
            <button
                className="w-24 h-24 bg-crimson text-white cursor-pointer"
                disabled={!hasPrev}
                onClick={() => goToPage(page - 1)}
            >
                Previous
            </button>
            <button
                className="w-24 h-24 bg-crimson text-white cursor-pointer"
                disabled={!hasNext}
                onClick={() => goToPage(page + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
