import { useNavigate } from "react-router-dom";
import useInvoice from "../../Hook/useInvoice";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

function SendEmail() {
    const { state, derived } = useInvoice();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSendEmail = async () => {
        if (!state.templateId) {
            Swal.fire("Please select a template first!");
            return;
        }

        if (!user) {
            const result = await Swal.fire({
                title: "Login Required",
                text: "You must be logged in to send an invoice!",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Login",
                cancelButtonText: "Close",
                reverseButtons: true,
            });
            if (result.isConfirmed) navigate("/logIn");
            return;
        }

        // user input for recipient
        const result = await Swal.fire({
            title: "Recipient Email",
            input: "email",
            inputLabel: "Enter recipient's email",
            inputPlaceholder: "example@example.com",
            showCancelButton: true,
        });

        if (!result.value) {
            Swal.fire("Email not entered. Invoice not sent!");
            return;
        }

        const toEmail = result.value;

        // prepare invoice text
        let invoiceText = `Hello,\n\nHere is your invoice:\n\n`;
        invoiceText += `Invoice Title: ${state.title}\nInvoice Number: ${state.invoiceNumber}\nDate: ${state.date}\nDue Date: ${state.dueDate}\n\n`;
        invoiceText += `From:\n${state.from.email}\n\n`;
        invoiceText += `To:\n${state.to.email}\n\n`;
        invoiceText += `Items:\nDescription | Qty | Unit Price | Amount\n`;
        state.items?.forEach(item => {
            invoiceText += `${item.name} | ${item.qty} | ${item.unitPrice} | ${item.qty * item.unitPrice}\n`;
        });
        invoiceText += `\nSubtotal: ${derived.subTotal}\nTax (${state.taxPercent || 0}%): ${derived.taxAmount}\nTotal: ${derived.total}\n`;

        // gmail link
        const subject = encodeURIComponent(`Invoice: ${state.invoiceNumber}`);
        const body = encodeURIComponent(invoiceText);
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${subject}&body=${body}`;
        window.open(gmailLink, "_blank");
    };

    return (
        <div>
            <button
                onClick={handleSendEmail}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-200 hover:text-black"
            >
                Send Email
            </button>
        </div>
    );
}

export default SendEmail;
