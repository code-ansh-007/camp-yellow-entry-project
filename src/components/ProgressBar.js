const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="h-2 w-full bg-white rounded-full">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full bg-[#5a6bcf] rounded-full`}
      ></div>
    </div>
  );
};

export default ProgressBar;
