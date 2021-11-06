import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { PaginationWrapper } from './styles';

export const Pagination = () => (
	<PaginationWrapper>
		<button type='button' id='previous'>
			<FiChevronLeft size={24} />
		</button>

		<div className='numbers'>
			<button type='button' className='number'>
				1
			</button>
			<button type='button' className='number'>
				2
			</button>
			<button type='button' className='number active'>
				3
			</button>
			<button type='button' className='number'>
				4
			</button>
			<button type='button' className='number'>
				5
			</button>
		</div>
		<button type='button' id='next'>
			<FiChevronRight size={24} />
		</button>
	</PaginationWrapper>
);
