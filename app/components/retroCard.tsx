import { cn } from "@/lib/utils";

type RetroCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function RetroCard({ children, className = "" }: RetroCardProps) {
  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-col w-[5px] shrink-0">
        <div className="flex justify-end items-end w-full h-[5px]">
          <div className="bg-neutral-300 h-[2.5px] w-[2.5px]" />
        </div>
        <div className="flex h-full">
          <div className="w-1/2 h-full bg-white" />
          <div className="w-1/2 h-full bg-black" />
        </div>
        <div className="flex justify-end items-start w-full h-[5px]">
          <div className="bg-white h-[2.5px] w-[2.5px]" />
        </div>
      </div>
      <div className="flex flex-col flex-grow min-w-0">
        <div className="w-full bg-neutral-300 h-[2.5px]" />
        <div className="w-full bg-black h-[2.5px]" />
        {children}
        <div className="w-full bg-black h-[2.5px]" />
        <div className="w-full bg-white h-[2.5px]" />
      </div>
      <div className="flex flex-col w-[5px] shrink-0">
        <div className="flex justify-start items-end w-full h-[5px]">
          <div className="bg-neutral-300 h-[2.5px] w-[2.5px]" />
        </div>
        <div className="flex w-full h-full">
          <div className="w-1/2 h-full bg-black" />
          <div className="w-1/2 h-full bg-white" />
        </div>
        <div className="flex justify-start items-start w-full h-[5px]">
          <div className="bg-white h-[2.5px] w-[2.5px]" />
        </div>
      </div>
    </div>
  );
}
