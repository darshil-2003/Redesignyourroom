import React from "react";

// Logo Icon
export const LogoIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}) => (
  <div className={`${className} relative`}>
    <div className="w-full h-full bg-[#141c5d] rounded-[10.92px] relative overflow-hidden">
      <img
        src="/images/vector-112.svg"
        alt="Logo vector 1"
        className="absolute top-[-10px] left-[12px] w-[44px] h-[62px] opacity-80"
      />
      <img
        src="/images/vector-113.svg"
        alt="Logo vector 2"
        className="absolute top-[48px] left-[-25px] w-[76px] h-[69px] opacity-80 transform rotate-[300deg]"
      />
      <img
        src="/images/vector.svg"
        alt="Logo main"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[23px] h-[25px]"
      />
    </div>
  </div>
);

// Plus Icon for FAQ
export const DropDownIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M9.9958 12.2085L15.2766 6.92764C15.4561 6.74764 15.6686 6.66069 15.9141 6.6668C16.1597 6.67292 16.3725 6.76569 16.5525 6.94514C16.7319 7.12514 16.8216 7.33792 16.8216 7.58347C16.8216 7.82903 16.7319 8.04153 16.5525 8.22097L11.0191 13.736C10.8816 13.8762 10.7165 13.9863 10.5341 14.0593C10.3634 14.1299 10.1805 14.1664 9.9958 14.1668C9.81073 14.1663 9.62756 14.1295 9.45664 14.0585C9.27438 13.9857 9.10922 13.8759 8.97164 13.736L3.4383 8.20264C3.35323 8.12207 3.2861 8.02447 3.2413 7.9162C3.1965 7.80793 3.17503 7.69143 3.1783 7.5743C3.18441 7.33542 3.27719 7.12569 3.45664 6.94514C3.63664 6.76569 3.84941 6.67597 4.09497 6.67597C4.34053 6.67597 4.55303 6.76569 4.73247 6.94514L9.9958 12.2085Z"
      fill="white"
      fill-opacity="0.6"
    />
  </svg>
);

// Feature Icon
export const FeatureIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Handler Icon for slider
export const HandlerIcon = ({
  className = "w-12 h-12",
}: {
  className?: string;
}) => (
  <img src="/images/handler.svg" alt="Slider handler" className={className} />
);

// Line Icon
export const LineIcon = ({
  className = "w-full h-px",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 334 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="0.5" x2="334" y2="0.5" stroke="rgba(235,240,255,0.24)" />
  </svg>
);

// Footer Logo Icon
export const FooterLogoIcon = ({
  className = "w-8 h-8",
}: {
  className?: string;
}) => (
  <img
    src="/images/1536w-default.svg"
    alt="Footer logo"
    className={className}
  />
);

// Star Icon for ratings
export const StarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0L10.5 5.5L16 6L12 10L13 16L8 13L3 16L4 10L0 6L5.5 5.5L8 0Z"
      fill="currentColor"
    />
  </svg>
);

// Arrow Right Icon
export const ArrowRightIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 10H16M16 10L10 4M16 10L10 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Check Icon
export const CheckIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.667 5L7.5 14.167L3.333 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Upload Icon
export const UploadIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 8L12 3L7 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// AI Icon
export const AIIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12H16M12 8V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Design Icon
export const DesignIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 9H15M9 12H15M9 15H12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Room Icon
export const RoomIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22V12H15V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ImageUploadIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7_369)">
      <path
        d="M12.6968 6.12451H5.49769C4.4784 6.12451 3.96875 6.12451 3.57943 6.32288C3.23697 6.49737 2.95855 6.77579 2.78406 7.11825C2.58569 7.50757 2.58569 8.01721 2.58569 9.03653V19.3903C2.58569 20.4096 2.58569 20.9192 2.78406 21.3085C2.95855 21.651 3.23697 21.9294 3.57943 22.1039C3.96875 22.3023 4.4784 22.3023 5.49769 22.3023H19.8959C20.9152 22.3023 21.4249 22.3023 21.8142 22.1039C22.1566 21.9294 22.435 21.651 22.6096 21.3085C22.8079 20.9192 22.8079 20.4096 22.8079 19.3903V14.2134"
        stroke="currentColor"
        strokeWidth="1.21333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.62988 18.2573L7.78037 15.9563C8.71178 14.0934 9.17752 13.1619 9.80779 12.863C10.3562 12.6029 10.9925 12.6029 11.5409 12.863C12.1711 13.1619 12.6369 14.0934 13.5683 15.9563L14.7188 18.2573M18.7632 18.2573L17.2465 16.235C16.9646 15.8592 16.8237 15.6712 16.6754 15.5382C16.0665 14.9922 15.1886 14.8668 14.451 15.2205C14.2715 15.3066 14.0835 15.4475 13.7077 15.7295"
        stroke="currentColor"
        strokeWidth="1.21333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0599 8.45575C21.2968 8.00125 19.9191 6.62362 19.4646 4.86063C19.4125 4.65844 19.1253 4.65844 19.0732 4.86063C18.6187 6.62362 17.241 8.00125 15.4779 8.45575C15.2756 8.50792 15.2756 8.7953 15.4779 8.8476C17.241 9.30205 18.6187 10.6797 19.0732 12.4423C19.1253 12.6445 19.4125 12.6445 19.4646 12.4423C19.9191 10.6797 21.2968 9.30205 23.0599 8.8476C23.2622 8.7953 23.2622 8.50792 23.0599 8.45575Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_7_369">
        <rect
          width="24.2667"
          height="24.2667"
          fill="white"
          transform="translate(0.866699 0.866699)"
        />
      </clipPath>
    </defs>
  </svg>
);
