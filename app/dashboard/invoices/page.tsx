import InvoicesTable from "@/app/ui/invoices/table";
import Search from "@/app/ui/search";
import Pagination from '@/app/ui/invoices/pagination';
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from '@/app/ui/fonts';


export default async function InvoicesPage({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    return (
        <> 
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Invoices Table
            </h1>
            <div className="flex mb-6 justify-end"><CreateInvoice /></div>
            <div className="flex">
                <Search placeholder="Search Invoices" />
            </div>
         
            <InvoicesTable query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={9} />
            </div>
        </>
    )
}