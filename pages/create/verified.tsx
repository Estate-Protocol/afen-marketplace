import React from "react";
import { CreateForm } from "../../components/Create";

export default function verified() {
  return (
    <div>
      <CreateForm verified={true} />
    </div>
  );
}
