import { PDFDownloadLink, Document, Page, StyleSheet } from "@react-pdf/renderer";
import useInvoice from "../../Hook/useInvoice";
import Template1PDF from "./Template1PDF";

const pdfStyles = StyleSheet.create({
  page: { padding: 20, fontSize: 11, fontFamily: "Helvetica" },
});

export default function PdfExportButton() {
  const { state, derived = { subTotal: 0, taxAmount: 0, total: 0 } } = useInvoice();

  const renderTemplate = () => {
    switch (state.selectedTemplate) {
      case 1:
        return Template1PDF(state, derived); //template 1
      // case 2:
      //   return Template2PDF(state, derived);
      // case 3:
      //   return Template3PDF(state, derived);
      default:
        return Template1PDF(state, derived);
    }
  };

  return (
    <div className="mt-4">
      <PDFDownloadLink
        document={<Document><Page style={pdfStyles.page}>{renderTemplate()}</Page></Document>}
        fileName={`${state.invoiceNumber || "invoice"}.pdf`}
      >
        {({ loading }) => (
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            {loading ? "Preparing..." : "Download PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
