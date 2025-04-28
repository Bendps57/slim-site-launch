
import React from "react";
import { useEbookForm } from "@/hooks/useEbookForm";
import EbookSuccess from "../EbookSuccess";
import EbookFormComponent from "../EbookFormComponent";

const EbookForm = () => {
  const { email, setEmail, submitted, isLoading, handleSubmit } = useEbookForm();

  return submitted ? (
    <EbookSuccess />
  ) : (
    <EbookFormComponent
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
};

export default EbookForm;
