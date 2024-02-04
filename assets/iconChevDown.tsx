import { IIconProps } from "@/interface/Icon";

interface IChevProps extends IIconProps {
  direction: "up" | "down" | "left" | "right";
}

const IconChevDown = ({
  width,
  height = 12,
  fill = "white",
  direction = "down",
}: IChevProps) => {
  const rotateDeg =
    direction === "up"
      ? "rotate(180)"
      : direction === "left"
      ? "rotate(90)"
      : direction === "right"
      ? "rotate(-90)"
      : "rotate(0)";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`${rotateDeg} scale(1, 0.85)`}
    >
      <path
        d="M7.37821 9.45233L0.257567 2.33165C-0.0858557 1.98823 -0.0858557 1.43145 0.257567 1.08807L1.08808 0.257559C1.43091 -0.0852778 1.98655 -0.0859376 2.33019 0.256093L8.00002 5.89935L13.6698 0.256093C14.0134 -0.0859376 14.5691 -0.0852778 14.9119 0.257559L15.7424 1.08807C16.0859 1.43149 16.0859 1.98826 15.7424 2.33165L8.62183 9.45233C8.27841 9.79571 7.72163 9.79571 7.37821 9.45233Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconChevDown;
