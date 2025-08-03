const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      {/* Rounded square background */}
      <rect x="8" y="8" width="48" height="48" rx="12" fill="#E3F2FD" />
      
      {/* Star icon */}
      <path
        d="M32 18L34.99 26.26L44 27.27L37 33.14L38.82 42.09L32 37.77L25.18 42.09L27 33.14L20 27.27L29.01 26.26L32 18Z"
        stroke="#1E88E5"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default StarIcon;
