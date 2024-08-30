"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((path) => path);

  return (
    <nav aria-label="breadcrumb">
      <Link href="/">Home</Link>
      {pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");
        return (
          <span key={index}>
            {" > "}
            <Link href={href}>{part}</Link>
          </span>
        );
      })}
    </nav>
  );
}
