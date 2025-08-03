const BarsIcon = () => {
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
  
        {/* Vertical bars */}
        <rect x="16" y="24" width="8" height="20" fill="#1E88E5" />
        <rect x="28" y="16" width="8" height="28" fill="#1E88E5" />
        <rect x="40" y="12" width="8" height="32" fill="#1E88E5" />
      </svg>
    );
  };
  
  export default BarsIcon;