import React, { Suspense } from "react";

// Dynamically import the components using the names defined in the Webpack remotes
const FsadSyllabus = React.lazy(() => import("fsadApp/Syllabus"));
const ApiProductsSyllabus = React.lazy(() => import("apiProducts/Syllabus")); // Assuming you build this

export default function App() {
  return (
    <div>
      <h1>Main Shell Application</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Suspense provides a fallback UI while the remote code is downloading */}
        <Suspense fallback={<div>Loading FSAD Microapp...</div>}>
          <FsadSyllabus />
        </Suspense>

        <Suspense fallback={<div>Loading ApiProducts Microapp...</div>}>
          <ApiProductsSyllabus />
        </Suspense>
      </div>
    </div>
  );
}
