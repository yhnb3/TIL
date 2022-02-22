import React from "react";
import Dialog from "./Dialog";

export default function ThankYouDialog() {
  return (
    <Dialog
      title={<h1 style={{ color: "purple" }}>Thanks</h1>}
      description="It is honor to meet you"
      button="close"
    />
  );
}
