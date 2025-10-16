import { View, Text, Image as PDFImage } from "@react-pdf/renderer";

const Template2PDF = ({ state, derived }) => (
    <View
        style={{
            backgroundColor: "#ffffff",
            padding: 20,
            fontSize: 10,
            fontFamily: "Helvetica",
            lineHeight: 1.5,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            borderRadius: 6,
        }}
    >
        {/* header */}
        <View
            style={{
                backgroundColor: "#00966b",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                paddingVertical: 12,
                paddingHorizontal: 14,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
            }}
        >
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
                    Invoice
                </Text>
                <Text style={{ color: "white", marginTop: 2 }}>
                    #{state.invoiceNumber}
                </Text>
            </View>
            <View style={{ textAlign: "right" }}>
                <Text style={{ color: "white" }}>Date: {state.date || "-"}</Text>
                <Text style={{ color: "white" }}>Due: {state.dueDate || "-"}</Text>
            </View>
        </View>

        {/* from / to */}
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
            }}
        >
            <View style={{ width: "45%" }}>
                <Text style={{ fontWeight: "bold", marginBottom: 2 }}>From:</Text>
                <Text>{state.from?.name}</Text>
                <Text>{state.from?.address}</Text>
                <Text>{state.from?.email}</Text>
                <Text>{state.from?.phone}</Text>
            </View>

            <View style={{ width: "45%", textAlign: "right" }}>
                <Text style={{ fontWeight: "bold", marginBottom: 2 }}>To:</Text>
                <Text>{state.to?.name}</Text>
                <Text>{state.to?.address}</Text>
                <Text>{state.to?.email}</Text>
                <Text>{state.to?.phone}</Text>
            </View>
        </View>

        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 4,
            }}
        >
            <Text>
                Qty: {derived.totalQty || 0} × Tk.{derived.subTotal?.toFixed(2) || "0.00"}
            </Text>
            <Text>Tk.{derived.total?.toFixed(2) || "0.00"}</Text>
        </View>

        <View
            style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                marginBottom: 10,
            }}
        />

        {/* total*/}
        <View
            style={{
                alignSelf: "flex-end",
                width: 180,
                borderWidth: 1,
                borderColor: "#000",
                borderRadius: 6,
                padding: 8,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 2,
                }}
            >
                <Text>Subtotal</Text>
                <Text>Tk.{derived.subTotal.toFixed(2)}</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 2,
                }}
            >
                <Text>Tax ({state.taxPercent}%)</Text>
                <Text>Tk.{derived.taxAmount.toFixed(2)}</Text>
            </View>
            <View
                style={{
                    borderTopWidth: 1,
                    borderTopColor: "#000",
                    marginTop: 4,
                    paddingTop: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>Total</Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                    Tk.{derived.total.toFixed(2)}
                </Text>
            </View>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text>Thank you for your business</Text>

            {state.signature && (
                <View
                    style={{
                        width: 100,
                        height: 40,
                        marginTop: 8,
                        overflow: "hidden",
                    }}
                >
                    <PDFImage
                        src={state.signature}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </View>
            )}
        </View>
    </View>
);

export default Template2PDF;
