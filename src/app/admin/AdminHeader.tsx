import Link from "next/link";
import type { CurrentAdmin } from "@/lib/admin/dal";
import { logout } from "./login/actions";

export function AdminHeader({ admin }: { admin: CurrentAdmin }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              HA
            </div>
            <span className="font-semibold">HousingAtlas Admin</span>
          </Link>
          <nav className="hidden gap-4 text-sm text-slate-600 sm:flex">
            <Link href="/admin" className="hover:text-slate-900">Dashboard</Link>
            <Link href="/admin/universities" className="hover:text-slate-900">Universities</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden text-slate-600 sm:inline">{admin.email}</span>
          <form action={logout}>
            <button type="submit" className="rounded-lg border border-slate-300 px-3 py-1.5 font-medium hover:bg-slate-50">
              Log out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
