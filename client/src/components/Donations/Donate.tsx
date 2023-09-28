import CenterContianer from "../../layout/Center.container";

const Donate = () => {
  return (
    <section className="bg-[#BED6FF]" id="donate">
      <CenterContianer>
        <div className="flex flex-col justify-center items-center py-16 gap-6">
          <h1 className="text-3xl text-center font-semibold text-[#3848E0]">
            "Donate and be the sunshine in someone's life during the storm"
          </h1>
          <div>
            <button className="bg-[#3848E0] px-5 py-2 rounded-sm text-[#BED6FF] font-medium">
              DONATE
            </button>
          </div>
        </div>
      </CenterContianer>
    </section>
  );
};

export default Donate;
