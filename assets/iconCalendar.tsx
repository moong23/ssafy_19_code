import { IIconProps } from "@/interface/Icon";

const IconCalendar = ({
  width,
  height = 28,
  fill = "black",
  onClick,
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24.8571C0 26.2768 1.15179 27.4286 2.57143 27.4286H21.4286C22.8482 27.4286 24 26.2768 24 24.8571V10.2857H0V24.8571ZM17.1429 14.3571C17.1429 14.0036 17.4321 13.7143 17.7857 13.7143H19.9286C20.2821 13.7143 20.5714 14.0036 20.5714 14.3571V16.5C20.5714 16.8536 20.2821 17.1429 19.9286 17.1429H17.7857C17.4321 17.1429 17.1429 16.8536 17.1429 16.5V14.3571ZM17.1429 21.2143C17.1429 20.8607 17.4321 20.5714 17.7857 20.5714H19.9286C20.2821 20.5714 20.5714 20.8607 20.5714 21.2143V23.3571C20.5714 23.7107 20.2821 24 19.9286 24H17.7857C17.4321 24 17.1429 23.7107 17.1429 23.3571V21.2143ZM10.2857 14.3571C10.2857 14.0036 10.575 13.7143 10.9286 13.7143H13.0714C13.425 13.7143 13.7143 14.0036 13.7143 14.3571V16.5C13.7143 16.8536 13.425 17.1429 13.0714 17.1429H10.9286C10.575 17.1429 10.2857 16.8536 10.2857 16.5V14.3571ZM10.2857 21.2143C10.2857 20.8607 10.575 20.5714 10.9286 20.5714H13.0714C13.425 20.5714 13.7143 20.8607 13.7143 21.2143V23.3571C13.7143 23.7107 13.425 24 13.0714 24H10.9286C10.575 24 10.2857 23.7107 10.2857 23.3571V21.2143ZM3.42857 14.3571C3.42857 14.0036 3.71786 13.7143 4.07143 13.7143H6.21429C6.56786 13.7143 6.85714 14.0036 6.85714 14.3571V16.5C6.85714 16.8536 6.56786 17.1429 6.21429 17.1429H4.07143C3.71786 17.1429 3.42857 16.8536 3.42857 16.5V14.3571ZM3.42857 21.2143C3.42857 20.8607 3.71786 20.5714 4.07143 20.5714H6.21429C6.56786 20.5714 6.85714 20.8607 6.85714 21.2143V23.3571C6.85714 23.7107 6.56786 24 6.21429 24H4.07143C3.71786 24 3.42857 23.7107 3.42857 23.3571V21.2143ZM21.4286 3.42857H18.8571V0.857143C18.8571 0.385714 18.4714 0 18 0H16.2857C15.8143 0 15.4286 0.385714 15.4286 0.857143V3.42857H8.57143V0.857143C8.57143 0.385714 8.18571 0 7.71429 0H6C5.52857 0 5.14286 0.385714 5.14286 0.857143V3.42857H2.57143C1.15179 3.42857 0 4.58036 0 6V8.57143H24V6C24 4.58036 22.8482 3.42857 21.4286 3.42857Z"
        fill={fill}
      />
    </svg>
  );
};
export default IconCalendar;
