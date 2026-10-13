import { redirect } from "next/navigation";
import { AdminSessionStage } from "@/generated/prisma/client";
import { readSession } from "@/lib/admin/session";
import { AuthCard } from "../../AuthCard";
import { VerifyForm } from "./VerifyForm";

export const metadata = { title: "Authenticator code" };

export default async function VerifyPage() {
  const session = await readSession();
  if (session?.stage === AdminSessionStage.ACTIVE) redirect("/admin");
  if (!session) redirect("/admin/login?expired=1");

  return (
    <AuthCard title="Enter your code" subtitle="Open your authenticator app and enter the 6-digit code for HousingAtlas Admin.">
      <VerifyForm />
    </AuthCard>
  );
}
