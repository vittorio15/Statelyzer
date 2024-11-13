import InputTable from './InputTable';
import Guide from './Guide';

const MainLayout = () => {
  return (
    <div className="flex justify-between mt-10 p-6">
      {/* Left side (InputTable) */}
      <div className="w-8/12">
        <InputTable />
      </div>

      {/* Right side (Guide) */}
      <div className="w-4/12 ml-4">
        <Guide />
      </div>
    </div>
  );
};

export default MainLayout;
