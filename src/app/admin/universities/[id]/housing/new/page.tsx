import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/dal";
import { prisma } from "@/lib/prisma";
import { AdminHeader } from "../../../../AdminHeader";
import { ActionForm } from "../../../ActionForm";
import { createHousing } from "../../../actions";
import { Card } from "../../../fields";
import { HousingFields } from "../../../HousingFields";

export const metadata = { title: "Add housing" };

export default async function NewHousingPage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin();
  const { id } = await params;
  const university = await prisma.university.findUnique({ where: { id }, include: { campuses: { orderBy: { sortOrder: "asc" } } } });
  if (!university) notFound();

  return (
    <>
      <AdminHeader admin={admin} />
      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <Link href={`/admin/universities/${university.id}`} className="text-sm text-blue-700 hover:underline">
          ← {university.name}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold">Add housing option</h1>
        <p className="mt-1 text-sm text-slate-600">After saving you can add application deadlines.</p>
        <Card title="Details">
          <ActionForm action={createHousing} submitLabel="Create housing option">
            <input type="hidden" name="universityId" value={university.id} />
            <HousingFields campuses={university.campuses} />
          </ActionForm>
        </Card>
      </main>
    </>
  );
}
