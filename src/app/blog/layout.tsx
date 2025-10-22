"use client";

import { usePathname } from "next/navigation";
import BackNavigation from "~/components/ui/back-navigation";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isOnBlogList = pathname === "/blog";
  const backHref = isOnBlogList ? "/" : "/blog";

  return (
    <div>
      <div className="mb-4">
        <BackNavigation href={backHref}>Back</BackNavigation>
      </div>
      {children}
    </div>
  );
}
