import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { fetchAdminProducts } from '@/utils/actions'

async function ItemsPage() {
  const items = await fetchAdminProducts()
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
        <TableBody>
          <TableRow>
            <TableCell>
              Item000
            </TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}

export default ItemsPage
