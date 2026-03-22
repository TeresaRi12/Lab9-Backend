import type { Property } from '@/types/property';
import { useState, useEffect } from "react";

interface CompareButtonProps {
  property: Property;
}

const CompareButton: React.FC<CompareButtonProps> = ({ property }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("compare") ?? "[]");
    setSelected(stored.some((p: any) => p.id === property.id));
  }, [property.id]);

  const toggleCompare = () => {
    let stored = JSON.parse(localStorage.getItem("compare") ?? "[]");

    if (selected) {
      stored = stored.filter((p: any) => p.id !== property.id);
    } else {
      if (stored.length >= 3) {
        alert("You can only compare up to 3 properties");
        return;
      }
      stored.push({
        id: property.id,
        title: property.title,
        price: property.price,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        area: property.area
        });
    }

    localStorage.setItem("compare", JSON.stringify(stored));
    setSelected(!selected);
  };

  return (
    <button onClick={toggleCompare}>
      {selected ? "Remove from Compare" : "Compare"}
    </button>
  );
};

export default CompareButton;