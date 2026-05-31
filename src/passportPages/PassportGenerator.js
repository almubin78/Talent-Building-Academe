import { useState } from "react";
import defaultData from "./defaultData";
import PassportForm from "./PassportForm";
import PassportViewer from "./PassportViewer";



const PassportGenerator = () => {
  const [formData, setFormData] =
    useState(defaultData);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PassportForm
          formData={formData}
          setFormData={setFormData}
        />

        <PassportViewer data={formData} />
      </div>
    </div>
  );
};

export default PassportGenerator;