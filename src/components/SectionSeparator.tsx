import separatorIcon from "@/assets/separator-icon.png";

const SectionSeparator = () => {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-border"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-background p-2">
          <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
            <img src={separatorIcon} alt="" className="h-10 w-10 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeparator;
