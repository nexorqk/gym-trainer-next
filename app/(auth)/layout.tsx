import * as React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto max-w-[600px] w-full mt-4 flex flex-col items-center space-y-3">
      {children}
    </div>
  );
}
