type BagDimensionsProps = {
  position: { top?: number; right?: number; bottom?: number; left?: number };
  width: number;
  diameter: number;
  height: number;
};

const BagDimensions = ({
  position,
  width,
  diameter,
  height,
}: BagDimensionsProps) => {
  return (
    <p className="inline-flex flex-col absolute font-light" style={position}>
      <small>W {width}cm</small>
      <small>D {diameter}cm</small> <small>H {height}cm</small>
    </p>
  );
};

export const SlingDimensions = () => (
  <BagDimensions
    position={{ top: 16, left: 31 }}
    width={34}
    diameter={17.5}
    height={16}
  />
);

export const BreadDimensions = () => (
  <BagDimensions
    position={{ bottom: 66, right: 40 }}
    width={38}
    diameter={15.3}
    height={14}
  />
);

export const HoboDimensions = () => (
  <BagDimensions
    position={{ top: 16, left: 31 }}
    width={38}
    diameter={12.7}
    height={21}
  />
);
