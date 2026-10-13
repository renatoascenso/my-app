import { requireAdmin } from "@/lib/admin/dal";
import { logout } from "./login/actions";
import { TeamSection } from "./team/TeamSection";

export const metadata = { title: "Dashboard" };

export default async function AdminHome() {
  const admin = await requireAdmin();

  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              HA
            </div>
            <span className="font-semibold">HousingAtlas Admin</span>
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
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Welcome, {admin.name}</h1>
        <p className="mt-2 text-slate-600">Editing tools for cities, neighborhoods, listings and reports will appear here.</p>
        <TeamSection me={admin} />
      </main>
    </>
  );
}
