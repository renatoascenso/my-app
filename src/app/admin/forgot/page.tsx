import { AuthCard } from "../AuthCard";
import { ForgotForm } from "./ForgotForm";

export const metadata = { title: "Forgot password" };

export default function ForgotPage() {
  return (
    <AuthCard title="Forgot password" subtitle="We'll email you a link to choose a new password.">
      <ForgotForm />
    </AuthCard>
  );
}
