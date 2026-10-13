import { redirect } from "next/navigation";
import { AdminSessionStage } from "@/generated/prisma/client";
import { readSession } from "@/lib/admin/session";
import { AuthCard } from "../AuthCard";
import { LoginForm } from "./LoginForm";

export const metadata = { title: "Log in" };

const NOTICES: Record<string, string> = {
  expired: "Your login timed out. Please start again.",
  locked: "Too many attempts. Please wait 15 minutes and try again.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ expired?: string; locked?: string }>;
}) {
  const session = await readSession();
  if (session?.stage === AdminSessionStage.ACTIVE) redirect("/admin");

  const params = await searchParams;
  const notice = params.locked ? NOTICES.locked : params.expired ? NOTICES.expired : undefined;
  return (
    <AuthCard title="Log in" subtitle="For the HousingAtlas team only.">
      <LoginForm notice={notice} />
    </AuthCard>
  );
}
