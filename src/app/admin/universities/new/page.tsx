import Link from "next/link";
import { requireAdmin } from "@/lib/admin/dal";
import { AdminHeader } from "../../AdminHeader";
import { ActionForm } from "../ActionForm";
import { createUniversity } from "../actions";
import { Card } from "../fields";
import { UniversityFields } from "../UniversityFields";

export const metadata = { title: "Add university" };

export default async function NewUniversityPage({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  const admin = await requireAdmin();
  const { city } = await searchParams;

  return (
    <>
      <AdminHeader admin={admin} />
      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <Link href="/admin/universities" className="text-sm text-blue-700 hover:underline">
          ← All universities
        </Link>
        <h1 className="mt-2 text-2xl font-semibold">Add university</h1>
        <p className="mt-1 text-sm text-slate-600">After saving you can add campuses, housing and deadlines.</p>
        <Card title="Details">
          <ActionForm action={createUniversity} submitLabel="Create university">
            <UniversityFields defaultCity={city} />
          </ActionForm>
        </Card>
      </main>
    </>
  );
}
