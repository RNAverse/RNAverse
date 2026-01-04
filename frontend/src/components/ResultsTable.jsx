import React from "react";

const data = [
  {
    id: "Example_RNA_Sequence_1",
    sequence: "AUGCCAUAGCGUAUCGGAU...",
    type: "RNA",
    methylation: "m6A",
    model: "SVM",
    score: "64.8%",
    status: "Methylated"
  },
  {
    id: "Example_RNA_Sequence_2",
    sequence: "GCUAAUCGGAAUUCCAGUA...",
    type: "RNA",
    methylation: "m6A",
    model: "SVM",
    score: "57.7%",
    status: "Non methylated"
  },
  {
    id: "Example_RNA_Sequence_3",
    sequence: "UUAGCGCUAAUGCUAGCUA...",
    type: "RNA",
    methylation: "m6A",
    model: "SVM",
    score: "83.1%",
    status: "Methylated"
  }
];

export default function ResultsTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">Sequence ID</th>
            <th className="px-4 py-3">Sequence</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Predicted</th>
            <th className="px-4 py-3">Model</th>
            <th className="px-4 py-3">Score</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">{row.id}</td>
              <td className="px-4 py-3 font-mono text-xs bg-gray-100 rounded">
                {row.sequence}
              </td>
              <td className="px-4 py-3">{row.type}</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                  {row.methylation}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  {row.model}
                </span>
              </td>
              <td className="px-4 py-3 font-semibold text-orange-600">
                {row.score}
              </td>
              <td className="px-4 py-3">
                <span className={`badge ${row.status === "Methylated" ? "badge-green" : "badge-gray"}`}>
                  {row.status}
                </span>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}