import { useState } from "react";
import useInvoice from "../../Hook/useInvoice";

const templates = [
  { id: 1, name: "Template 1", accent: "bg-indigo-600" },
  { id: 2, name: "Template 2", accent: "bg-emerald-600" },
  { id: 3, name: "Template 3", accent: "bg-slate-700" },
];

export default function TemplateSelector() {
  const { dispatch } = useInvoice();
  const [activeTemplate, setActiveTemplate] = useState(1);

  const handleSelect = (id) => {
    setActiveTemplate(id);
    dispatch({ type: "SET_TEMPLATE", templateId: id });
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Choose Template</h3>
      <div className="flex gap-3">
        {templates.map(t => (
          <button
            key={t.id}
            onClick={() => handleSelect(t.id)}
            className={`w-36 p-3 rounded-lg border text-white transition-all duration-300
              ${t.accent} ${activeTemplate===t.id?"ring-4 ring-fuchsia-300 scale-105":"opacity-80 hover:opacity-100"}`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
}
