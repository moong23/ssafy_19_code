import { IIconProps } from "@/interface/Icon";

const IconCode = ({ width, height = 26, fill, onClick }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 26"
      onClick={onClick}
    >
      <path
        fill={fill}
        d="M13.945 25.571l-3.05-.885a.6.6 0 01-.41-.745L17.31.433a.6.6 0 01.745-.41l3.05.885a.6.6 0 01.41.745L14.69 25.161a.6.6 0 01-.745.41zm-5.7-5.61l2.175-2.32a.6.6 0 00-.04-.86l-4.53-3.984 4.53-3.985a.596.596 0 00.04-.86l-2.174-2.32a.6.6 0 00-.85-.024L.19 12.358a.596.596 0 000 .874l7.205 6.755c.245.23.625.22.85-.025zm16.36.03l7.204-6.754a.596.596 0 000-.875l-7.205-6.76a.605.605 0 00-.85.026l-2.174 2.32a.6.6 0 00.04.86l4.53 3.99-4.53 3.984a.596.596 0 00-.04.86l2.174 2.32a.6.6 0 00.85.03z"
      ></path>
    </svg>
  );
};

export default IconCode;
