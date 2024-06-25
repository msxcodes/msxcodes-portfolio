import React from "react";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  return <div className="max-w-[1800px] mx-auto">{children}</div>;
}
