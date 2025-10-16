<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Invoice Generator Web Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            max-width: 900px;
            margin: auto;
        }
        h1, h2, h3 {
            color: #333;
        }
        ul {
            margin-left: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
        }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <h1>Invoice Generator Web Application</h1>
    <p>This is a <strong>React-based Invoice Generator</strong> web application with Firebase authentication. Users can create invoices, preview them, and send them via email.</p>

    <h2>Features</h2>
    <ul>
        <li>User Authentication using Firebase (Sign Up / Login)</li>
        <li>Create and Preview Invoices</li>
        <li>Dynamic From & To fields for invoices</li>
        <li>Add multiple invoice items with quantity and price</li>
        <li>Calculate subtotal, tax, and total automatically</li>
        <li>Send invoice via Gmail</li>
        <li>Responsive design for mobile and desktop</li>
        <li>Social login support (Google)</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> React, TailwindCSS, React Hook Form</li>
        <li><strong>Backend:</strong> Node.js, MongoDB</li>
        <li><strong>Authentication:</strong> Firebase Auth</li>
        <li><strong>Email Sending:</strong> Gmail Compose Link</li>
        <li><strong>State Management:</strong> React Context / useState / Custom Hooks</li>
        <li><strong>Notifications:</strong> SweetAlert2</li>
    </ul>

    <h2>Screenshots</h2>
    <h3>Invoice Preview</h3>
    <img src="https://i.ibb.co.com/Nd7YT1ct/INVOICE.png" alt="Invoice Preview">

</body>
</html>
