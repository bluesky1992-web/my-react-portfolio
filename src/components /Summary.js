import summaryimg from "../assets/summaryimg.jpg";

export default function Summary() {
  return (
    <div className="  flex flex-col items-center justify-center   md:flex-row p-20 bg-slate-300">
      <div className=" pb-10 md:pb-0 h-  md:w-full  ">
        <img
          src={summaryimg}
          className="block w-[200px] sm:w-[400px]  border-4 border-amber-300 "
          alt="ali summary"
        ></img>
      </div>
      <div>
        <p className=" text font md:text-justify text-sm md:text-lg  pl-5 font-semibold font-[Arial] text-center">
          After completing the Re: coded Bootcamp with success as a front-end
          developer, I aim to expand my understanding of the industry. This will
          enable me to help individuals and businesses enhance their value. I
          derive great satisfaction from resolving particular issues and
          producing code that accurately corresponds to the design.
        </p>
      </div>
     
    </div>
  );
}
