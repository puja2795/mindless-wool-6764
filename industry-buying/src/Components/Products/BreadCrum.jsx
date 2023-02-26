import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const BreadCrum = () => {
  return (
    <div>
      <Breadcrumb>
          <BreadcrumbItem> <BreadcrumbLink href='#'>Home</BreadcrumbLink> </BreadcrumbItem>
          <BreadcrumbItem> <BreadcrumbLink href='#'>Docs</BreadcrumbLink> </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage> <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink> </BreadcrumbItem>
        </Breadcrumb>
    </div>
  )
}

export default BreadCrum
