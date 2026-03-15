import { useEffect, useState } from "react";

const ComparePage: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("compare") || "[]");
    setProperties(stored);
  }, []);

  const removeProperty = (id: string) => {
    const updated = properties.filter((p) => p.id !== id);
    setProperties(updated);
    localStorage.setItem("compare", JSON.stringify(updated));
  };

  if (properties.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          No properties selected for comparison
        </h2>
      </div>
    );
  }

  const bestPrice = Math.min(...properties.map((p) => p.price));
  const bestArea = Math.max(...properties.map((p) => p.area));
  const bestPricePerSqm = Math.min(...properties.map((p) => p.price / p.area));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Property Comparison</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Metric</th>
            {properties.map((p) => (
              <th key={p.id} className="border p-2">{p.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Price</td>
            {properties.map((p) => (
              <td
                key={p.id}
                className="border p-2"
                style={{
                  backgroundColor: p.price === bestPrice ? "lightgreen" : "",
                }}
              >
                ${p.price}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-2">Bedrooms</td>
            {properties.map((p) => (
              <td key={p.id} className="border p-2">{p.bedrooms}</td>
            ))}
          </tr>

          <tr>
            <td className="border p-2">Bathrooms</td>
            {properties.map((p) => (
              <td key={p.id} className="border p-2">{p.bathrooms}</td>
            ))}
          </tr>

          <tr>
            <td className="border p-2">Area</td>
            {properties.map((p) => (
              <td
                key={p.id}
                className="border p-2"
                style={{
                  backgroundColor: p.area === bestArea ? "lightgreen" : "",
                }}
              >
                {p.area} m²
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-2">Price per sqm</td>
            {properties.map((p) => (
              <td
                key={p.id}
                className="border p-2"
                style={{
                  backgroundColor:
                    (p.price / p.area) === bestPricePerSqm ? "lightgreen" : "",
                }}
              >
                ${(p.price / p.area).toFixed(2)}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-2">Remove</td>
            {properties.map((p) => (
              <td key={p.id} className="border p-2">
                <button onClick={() => removeProperty(p.id)}>
                  Remove
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparePage;