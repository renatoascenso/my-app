const sourceStyles: Record<string, string> = {
  HousingAtlas: "bg-blue-600 text-white",
  Uniplaces: "bg-orange-50 text-orange-700 ring-1 ring-orange-200",
  HousingAnywhere: "bg-teal-50 text-teal-700 ring-1 ring-teal-200",
  Spotahome: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200",
};

export default function SourceBadge({ source }: { source: string }) {
  const style = sourceStyles[source] ?? "bg-slate-100 text-slate-700";
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-bold ${style}`}
    >
      {source}
    </span>
  );
}
