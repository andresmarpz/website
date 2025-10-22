import { Undo2 } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

interface Props
  extends PropsWithChildren<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps
  > {}

export default function BackNavigation({ children, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cn(
        "flex items-center gap-2 text-[13px] text-neutral-500 italic",
        props.className,
      )}
    >
      <Undo2 width={13} height={13} className="mb-[2px]" />
      {children}
    </Link>
  );
}
