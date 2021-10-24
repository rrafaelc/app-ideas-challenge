import { Container } from './style';

export const Result = () => (
	<Container>
		<div className='result'>
			<table>
				<thead>
					<tr>
						<td className='userid'>USER ID</td>
						<td className='name'>NAME</td>
						<td className='email'>E-MAIL</td>
						<td className='order'>LAST ORDER DATE</td>
						<td className='sales'>SALES</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>444</td>
						<td>Bill</td>
						<td>bill@company.com</td>
						<td>2021-10-19 14:45:27</td>
						<td>23</td>
					</tr>
					<tr>
						<td>555</td>
						<td>Donna</td>
						<td>donna@home.org</td>
						<td>2021-05-01 08:10:05</td>
						<td>40</td>
					</tr>
				</tbody>
				{/* <thead>
					<tr>
						<td className='norows'>No rows to display</td>
					</tr>
				</thead> */}
			</table>
		</div>
	</Container>
);
