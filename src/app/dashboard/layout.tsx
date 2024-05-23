import NavLinks from "./nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/4">
        {/* 侧栏导航 */}
        <NavLinks />
      </div>
      <div className="w-full">{children}</div>
    </div>
  )
}