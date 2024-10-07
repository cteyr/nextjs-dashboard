import { fetchFilteredCustomers } from '@/app/lib/data'
import CustomersTable from '../../ui/customers/table'


export default async function CustomerPage ({
    searchParams,
  }: {
    searchParams?: {
      query?: string
    };
  }) {
    const query = searchParams?.query || '';
    const customerTable = await fetchFilteredCustomers(query);

    return (
        <>
            <CustomersTable customers={customerTable}/>
        </>
    )
}