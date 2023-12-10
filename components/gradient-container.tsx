export default function GradientContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-tl from-medium-blue via-medium-dark-blue to-dark-blue w-full text-white px-8 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto overflow-x-visible lg:overflow-clip">
        {children}
      </div>
    </div>
  );
}
