import { Container } from "@/components/ui";

export default function Loading() {
  return (
    <Container size="xl" className="py-24 flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 border-3 border-sky-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
          Loading Systems...
        </span>
      </div>
    </Container>
  );
}
