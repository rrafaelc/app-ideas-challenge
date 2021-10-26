import { useEffect, useState } from 'react';
import { Container } from './style';

type Customer = {
	userid: string;
	name: string;
	email: string;
	order: string;
	sales: string;
};

type ResultProps = {
	data: Customer[];
	done: boolean;
};

export const Result = ({ data, done }: ResultProps) => {
	const [customers, setCustomers] = useState<Customer[]>([]);

	useEffect(() => {
		if (done) {
			setCustomers([]);
			data.forEach(customer => {
				setCustomers(customers => [...customers, customer]);
			});
		}
	}, [data, done]);

	return (
		<Container>
			<div className={done ? 'result' : 'result loading'}>
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
						{customers.map(customer => (
							<tr key={Math.random().toString(36).substr(2, 9)}>
								<td>{customer.userid}</td>
								<td>{customer.name}</td>
								<td>{customer.email}</td>
								<td>{customer.order}</td>
								<td>{customer.sales}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Container>
	);
};
