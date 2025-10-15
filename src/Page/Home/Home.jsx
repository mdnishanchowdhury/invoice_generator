import { useRef } from "react";
import TemplateSelector from "../../components/DocumentTemplates/TemplateSelector";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import PdfExportButton from "../../components/PDFButton/PdfExportButton";
import Template1 from "../../components/Templates/Template1";
import InvoicePreview from "../../components/DocumentTemplates/InvoicePreview";

function Home() {
  const invoiceRef = useRef();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <h1 className="text-3xl font-bold mb-2">Invoice Generator</h1>
          <p className="text-gray-600">Choose template, edit fields and download PDF.</p>

          <TemplateSelector />
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <InvoiceForm />
          </div>
        </div>

        {/* Invoice Preview & PDF Button */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-end">
            <PdfExportButton targetRef={invoiceRef} />
          </div>

          {/* Render the actual invoice here */}
         <InvoicePreview></InvoicePreview>
        </div>

      </div>
    </div>
  );
}

export default Home;
