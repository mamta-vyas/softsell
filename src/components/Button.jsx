// Button.jsx
const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-semibold
        bg-blue-600 text-white
        hover:bg-blue-700
        dark:bg-blue-500 dark:hover:bg-blue-600
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
