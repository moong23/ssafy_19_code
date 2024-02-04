import "./index.style.css";

const NODATA = () => {
  return (
    <div className="w-full h-full bg-[#282A36] py-8 flex flex-col gap-20 text-3xl font-bold justify-center items-center text-white">
      <div>아직 선정된 코드가 없어요 ㅠㅜ</div>
      <div className="🤚">
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="🌴"></div>
        <div className="👍"></div>
      </div>
    </div>
  );
};

export default NODATA;
