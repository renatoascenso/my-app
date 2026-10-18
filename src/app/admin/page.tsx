import Link from "next/link";
import { requireAdmin } from "@/lib/admin/dal";
import { prisma } from "@/lib/prisma";
import { AdminHeader } from "./AdminHeader";
import { TeamSection } from "./team/TeamSection";

export const metadata = { title: "Dashboard" };

export default async function AdminHome() {
  const admin = await requireAdmin();
  const [universities, housing] = await Promise.all([prisma.university.count(), prisma.universityHousing.count()]);

  return (
    <>
      <AdminHeader admin={admin} />
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Welcome, {admin.name}</h1>
        <p className="mt-2 text-slate-600">Edit the content shown on housingatlas.com.</p>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link href="/admin/universities" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm">
            <p className="font-semibold">Universities</p>
            <p className="mt-1 text-sm text-slate-600">
              {universities} universities · {housing} housing options
            </p>
            <p className="mt-3 text-sm font-medium text-blue-700">Manage →</p>
          </Link>
        </section>

        <TeamSection me={admin} />
      </main>
    </>
  );
}
