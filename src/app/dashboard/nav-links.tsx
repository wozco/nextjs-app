'use client'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

const links = [
  { icon: 'HomeIcon', name: 'HomeIcon', href: '/' },
  { icon: 'UserGroupIcon', name: 'Customers', href: '/dashboard/customers' },
  { icon: 'DocumentDuplicateIcon', name: 'Invoices', href: '/dashboard/invoices' },
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {
        links.map(link => {
          // const LinkIcon = link.icon;
          return (
            <Link key={link.name} href={link.href} className={clsx(
              'flex py-2 px-1',
              {
                'bg-slate-700 text-white': pathname === link.href
              }
            )}>
              {link.name}
            </Link>
          )
        })
      }
    </>
  )
}