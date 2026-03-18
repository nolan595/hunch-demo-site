type Props = {
  children: React.ReactNode;
  accentColor?: string;
};

export function SectionLabel({ children, accentColor = "#FFE200" }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-1 h-4 rounded-full"
        style={{ background: accentColor }}
      />
      <span className="text-xs font-bold uppercase tracking-widest text-white/50">
        {children}
      </span>
    </div>
  );
}
