import { pdf, Document, Page, StyleSheet } from "@react-pdf/renderer";
import useInvoice from "../../Hook/useInvoice";
import Template1PDF from "./Template1PDF";
import Template2PDF from "./Template2PDF";
import Template3PDF from "./Template3PDF";

const pdfStyles = StyleSheet.create({
  page: { padding: 20, fontSize: 11, fontFamily: "Helvetica" },
});

function PdfExportButton() {
  const { state, derived } = useInvoice();

  // template select
  const renderTemplate = () => {
    switch (state.templateId) {
      case 2:
        return <Template2PDF state={state} derived={derived} />;
      case 3:
        return <Template3PDF state={state} derived={derived} />;
      default:
        return <Template1PDF state={state} derived={derived} />;
    }
  };

  const handleDownload = async () => {
    if (!state.templateId) {
      alert("Please select a template first!");
      return;
    }

    const doc = (
      <Document>
        <Page style={pdfStyles.page}>{renderTemplate()}</Page>
      </Document>
    );

    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${state.invoiceNumber || "invoice"}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
    >
      Download PDF
    </button>
  );
}
export default PdfExportButton;