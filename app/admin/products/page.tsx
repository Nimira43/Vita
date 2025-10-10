import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function ItemsPage() {
  return (
    <section>
      <Table>
        <TableCaption>
          Total Products: 34
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </section>
  )
}

export default ItemsPage
