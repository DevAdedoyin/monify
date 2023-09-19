import React, { Component, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Sidebar({ children }: Props) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
