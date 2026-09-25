"use client";

// React
import React, { PropsWithChildren } from "react";
// React

type T_LinkToOut = PropsWithChildren<{
  link: string;
  justCopy?: boolean;
}>;

const LinkToOut: React.FunctionComponent<T_LinkToOut> = ({
  link,
  children,
  justCopy,
}) => {
  return (
    <div
      onClick={() => {
        if (justCopy) {
          navigator.clipboard.writeText(link).then(() => {
            alert("Email Copied In Your Clipboard .");
          });
          return;
        }
        window.location.href = link;
      }}
    >
      {children}
    </div>
  );
};

export default LinkToOut;
