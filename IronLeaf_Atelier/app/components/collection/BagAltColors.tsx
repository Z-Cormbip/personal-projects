type BagAltColorsProps = {
  colors: string[];
};

const BagAltColors = ({ colors }: BagAltColorsProps) => {
  return (
    <div className="flex items-center gap-2 col-span-3">
      <p className="font-light">
        <small className="align-top">
          Available in ({colors.length}) colors:
        </small>
      </p>
      <ul className="flex gap-1">
        {colors.map((color, idx) => (
          <li key={idx} className={`size-4 rounded-full ${color}`} />
        ))}
      </ul>
    </div>
  );
};

export const SlingAltColors = () => (
  <BagAltColors colors={["bg-emerald-600", "bg-amber-800", "bg-red-900"]} />
);

export const BreadAltColors = () => (
  <BagAltColors colors={["bg-amber-800", "bg-red-900"]} />
);

export const HoboAltColors = () => (
  <BagAltColors colors={["bg-emerald-600", "bg-amber-800", "bg-red-900"]} />
);
