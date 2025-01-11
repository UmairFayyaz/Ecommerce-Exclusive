const CategoriesHeading = ({ title }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
      <h2 className="text-[16px] font-semibold text-[#DB4444]">{title}</h2>
    </div>
  );
};
export default CategoriesHeading;
