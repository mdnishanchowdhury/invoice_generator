import { forwardRef } from "react";
import useInvoice from "../../Hook/useInvoice";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";

const InvoicePreview = forwardRef((_, ref) => {
  const { state } = useInvoice();

  if (state.selectedTemplate === 1) return <Template1 ref={ref} />;
  if (state.selectedTemplate === 2) return <Template2 ref={ref} />;
  return <Template3 ref={ref} />;
});

export default InvoicePreview;
