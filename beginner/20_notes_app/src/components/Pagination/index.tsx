import ReactPaginate from 'react-paginate';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { PaginationWrapper } from './styles';

type PaginationProps = {
	pageCount: number;
	onPageChange: (event: any) => void;
};

// video: https://www.youtube.com/watch?v=HANSMtDy508
// video: https://www.youtube.com/watch?v=YSlzQlEqTBg

export const Pagination = ({ pageCount, onPageChange }: PaginationProps) => (
	<PaginationWrapper>
		<ReactPaginate
			previousLabel={<FiChevronLeft size={24} />}
			nextLabel={<FiChevronRight size={24} />}
			breakLabel='...'
			breakClassName='break-me'
			pageCount={pageCount}
			onPageChange={onPageChange}
			containerClassName='pagination'
			pageClassName='page-item'
			pageLinkClassName='page-link'
			previousLinkClassName='previous'
			nextLinkClassName='next'
			disabledClassName='disabled'
			activeClassName='active'
			pageRangeDisplayed={5}
			marginPagesDisplayed={1}
		/>
	</PaginationWrapper>
);
