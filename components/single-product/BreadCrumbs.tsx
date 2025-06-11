import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '../ui/breadcrumb'

function BreadCrumbs({ name }: {name: string}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbs
