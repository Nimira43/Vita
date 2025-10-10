import { Table, TableCaption, TableHeader, TableRow } from '@/components/ui/table'

function ItemsPage() {
  return (
    <section>
      <Table>
        <TableCaption>
          Total Products: 34
        </TableCaption>
        <TableHeader>
          <TableRow></TableRow>
        </TableHeader>
      </Table>
    </section>
  )
}

export default ItemsPage
