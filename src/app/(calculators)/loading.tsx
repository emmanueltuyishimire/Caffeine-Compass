
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </header>
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-[500px] w-full" />
      </div>
    </div>
  );
}
