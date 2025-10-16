import { pdf, Document, Page, StyleSheet } from "@react-pdf/renderer";
import useInvoice from "../../Hook/useInvoice";
import Template1PDF from "./Template1PDF";
import Template2PDF from "./Template2PDF";
import Template3PDF from "./Template3PDF";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import SendEmail from "./SendEmail";

const pdfStyles = StyleSheet.create({
  page: { padding: 20, fontSize: 11, fontFamily: "Helvetica" },
});

function PdfExportButton() {
  const { state, derived } = useInvoice();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

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

  const generatePdfBlob = async () => {
    if (!state.templateId) {
      Swal.fire("Please select a template first!");
      return null;
    }
    const doc = (
      <Document>
        <Page style={pdfStyles.page}>{renderTemplate()}</Page>
      </Document>
    );
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();
    return blob;
  };

  const handleDownload = async () => {
    const blob = await generatePdfBlob();
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${state.invoiceNumber || "invoice"}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleSave = async () => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You must be logged in to save an invoice!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Close",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) navigate("/logIn");
      });
      return;
    }

    const pdfData = {
      email: user.email,
      templateId: state.templateId,
      title: state.title,
      invoiceNumber: state.invoiceNumber,
      date: state.date,
      dueDate: state.dueDate,
      from: state.from,
      to: state.to,
      items: state.items,
      notes: state.notes,
      signature: null,
      taxPercent: state.taxPercent,
      derived,
    };

    try {
      const res = await axiosPublic.post("savePdf", pdfData);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error saving PDF:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to save PDF",
        text: error.message,
      });
    }
  };



  return (
    <div className="flex gap-3">

      {/* email send */}
      <SendEmail></SendEmail>
      
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-200 hover:text-black"
      >
        Save
      </button>

      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-blue-200 hover:text-black"
      >
        Download PDF
      </button>
    </div>
  );
}

export default PdfExportButton;
