const Spinner = ({ ...props }) => {
  return (
    <div className="text-center mt-1" {...props}>
      <div className="spinner-border text-warning" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    </div>
  );
};

export default Spinner;
