const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[50px]">
      <svg
        className="animate-spin h-[40px] w-[40px] border-2 border-l-0 border-green-400 rounded-full"
        viewBox="0 0 24 24"
      ></svg>
      <p className="mt-2">Loading...</p>
    </div>
  );
};

export default Loader;
