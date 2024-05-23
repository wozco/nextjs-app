import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>First Post</h1>

      <Link href="/dashboard/customers">customers</Link><br />
      <Link href="/dashboard/invoices">invoices</Link><br />
      <Link href="/">back home</Link>
    </>
  )
}