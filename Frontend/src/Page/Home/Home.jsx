import { useRef } from "react";
import TemplateSelector from "../../components/DocumentTemplates/TemplateSelector";
import InvoiceForm from "../../components/InvoiceForm/InvoiceForm";
import InvoicePreview from "../../components/DocumentTemplates/InvoicePreview";
import PdfExportButton from "../../components/InvoicePDF/PdfExportButton";

function Home() {
  const invoiceRef = useRef();

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-1 space-y-4">
          <h1 className="text-3xl font-bold mb-2">Invoice Generator</h1>
          <p className="text-gray-600">Choose template, edit fields and download PDF.</p>

          {/* invoice form */}
          <TemplateSelector />
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <InvoiceForm ></InvoiceForm>
          </div>
        </div>

        {/* PDF button */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-end">
            <PdfExportButton targetRef={invoiceRef} ></PdfExportButton>
          </div>

          {/* invoice preview */}
          <InvoicePreview></InvoicePreview>
        </div>

      </div>
    </div>
  );
}

export default Home;
