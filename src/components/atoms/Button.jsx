function Button({ title, type, disabled, ...props }) {
  switch (type) {
    case "gray":
      return (
        <button
          disabled={disabled}
          type="button"
          className={`rounded-lg p-2 w-fit ${
            disabled
              ? "bg-gray-200 cursor-not-allowed text-gray-400"
              : "bg-gray-500 text-white"
          }`}
          {...props}
        >
          {title}
        </button>
      );
    case "primary":
      return (
        <button
          disabled={disabled}
          type="button"
          className={`rounded-lg p-2 w-fit ${
            disabled
              ? "bg-blue-200 cursor-not-allowed text-gray-300"
              : "bg-blue-500 text-white"
          }`}
          {...props}
        >
          {title}
        </button>
      );

    default:
      return (
        <button
          type="button"
          className={`rounded-lg p-2 w-fit ${
            disabled
              ? "bg-blue-200 cursor-not-allowed text-gray-300"
              : "bg-blue-500 text-white"
          }`}
          {...props}
        >
          {title}
        </button>
      );
  }
}

export default Button;
