import { IIconProps } from "@/interface/Icon";

const IconGithub = ({
  width = 11,
  height = 11,
  fill = "white",
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.62921 8.51847C3.62921 8.56222 3.5789 8.59723 3.51546 8.59723C3.44327 8.60379 3.39295 8.56879 3.39295 8.51847C3.39295 8.47472 3.44327 8.43972 3.50671 8.43972C3.57233 8.43316 3.62921 8.46816 3.62921 8.51847ZM2.94887 8.42003C2.93356 8.46378 2.97731 8.5141 3.04294 8.52722C3.09981 8.5491 3.16544 8.52722 3.17857 8.48347C3.19169 8.43972 3.15013 8.3894 3.0845 8.36972C3.02762 8.3544 2.96418 8.37628 2.94887 8.42003ZM3.91578 8.38284C3.85234 8.39816 3.80859 8.43972 3.81516 8.49003C3.82172 8.53379 3.8786 8.56222 3.94422 8.54691C4.00766 8.5316 4.05142 8.49003 4.04485 8.44628C4.03829 8.40472 3.97923 8.37628 3.91578 8.38284ZM5.35522 0C2.32103 0 0 2.30353 0 5.33772C0 7.76375 1.52694 9.83978 3.70796 10.5704C3.98798 10.6207 4.08642 10.4479 4.08642 10.3057C4.08642 10.1701 4.07985 9.42195 4.07985 8.96255C4.07985 8.96255 2.54854 9.29069 2.22697 8.31065C2.22697 8.31065 1.97758 7.67406 1.61882 7.50999C1.61882 7.50999 1.11786 7.16654 1.65382 7.1731C1.65382 7.1731 2.19853 7.21686 2.49823 7.7375C2.97731 8.58191 3.78015 8.33909 4.09298 8.19471C4.14329 7.84469 4.28549 7.60187 4.44299 7.45749C3.22013 7.32186 1.98633 7.14467 1.98633 5.04021C1.98633 4.43862 2.15259 4.13673 2.5026 3.75172C2.44572 3.60952 2.25978 3.02325 2.55948 2.26634C3.01669 2.12415 4.06892 2.85699 4.06892 2.85699C4.50643 2.73449 4.97677 2.67105 5.44272 2.67105C5.90868 2.67105 6.37901 2.73449 6.81653 2.85699C6.81653 2.85699 7.86876 2.12196 8.32597 2.26634C8.62567 3.02544 8.43972 3.60952 8.38284 3.75172C8.73286 4.13892 8.94724 4.44081 8.94724 5.04021C8.94724 7.15123 7.65875 7.31967 6.43589 7.45749C6.63715 7.63031 6.80778 7.95845 6.80778 8.47253C6.80778 9.20975 6.80122 10.122 6.80122 10.3014C6.80122 10.4436 6.90184 10.6164 7.17967 10.5661C9.36726 9.83978 10.8504 7.76375 10.8504 5.33772C10.8504 2.30353 8.38941 0 5.35522 0ZM2.12634 7.54499C2.0979 7.56687 2.10446 7.61719 2.14165 7.65875C2.17665 7.69375 2.22697 7.70906 2.2554 7.68063C2.28384 7.65875 2.27728 7.60844 2.24009 7.56687C2.20509 7.53187 2.15478 7.51656 2.12634 7.54499ZM1.89008 7.3678C1.87476 7.39624 1.89664 7.43124 1.94039 7.45312C1.97539 7.47499 2.01914 7.46843 2.03446 7.4378C2.04977 7.40936 2.0279 7.37436 1.98414 7.35249C1.94039 7.33936 1.90539 7.34592 1.89008 7.3678ZM2.59886 8.14658C2.56385 8.17502 2.57698 8.24065 2.62729 8.28221C2.67761 8.33253 2.74105 8.33909 2.76949 8.30409C2.79793 8.27565 2.7848 8.21002 2.74105 8.16846C2.69292 8.11814 2.62729 8.11158 2.59886 8.14658ZM2.34947 7.82501C2.31447 7.84688 2.31447 7.90376 2.34947 7.95407C2.38447 8.00439 2.44354 8.02626 2.47198 8.00439C2.50698 7.97595 2.50698 7.91907 2.47198 7.86876C2.44135 7.81844 2.38447 7.79657 2.34947 7.82501Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconGithub;
