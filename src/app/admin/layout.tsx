import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Admin · HousingAtlas", template: "%s · HousingAtlas Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 flex-col bg-slate-50 text-slate-900">{children}</div>;
}
