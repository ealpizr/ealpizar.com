type SpotlightProps = {
  top: string;
  width: string;
  height: string;
  rotation: string;
};

export default function Spotlight({
  top,
  width,
  height,
  rotation,
}: SpotlightProps) {
  return (
    <div
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, rgba(56, 189, 248, 0.17) 0%, rgba(56, 189, 248, 0) 100%)`,
        height: `${height}`,
        width: `${width}`,
        transform: `rotate(${rotation})`,
        top: `${top}`,
        left: "0px",
      }}
      className={"rounded-full"}
    ></div>
  );
}
