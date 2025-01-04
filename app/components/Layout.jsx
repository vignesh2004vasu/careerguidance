import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar className="fixed top-0 w-full z-50" />
      <main className="flex-1 pt-16">{children}</main>
    </div>
  );
}
