const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-center w-full px-[20px] `}>
      <div className={` w-full  max-w-[1300px] ${className}`}>{children}</div>
    </div>
  );
};
export default Wrapper;
