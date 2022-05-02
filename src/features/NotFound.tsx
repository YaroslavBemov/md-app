import React from "react";
import Link from "@mui/material/Link";

const NotFound = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <p>There's nothing here!</p>
      <p>
        <Link href="https://md-calc.web.app">Main</Link>
      </p>
    </main>
  );
};

export default NotFound;
