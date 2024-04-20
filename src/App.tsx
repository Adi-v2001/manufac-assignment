import { ClassStats, addGamma, calculateByClass } from "./Functions";
import WineData from "./WineData.json";

//Boolean param, to tell function to calculate flavenoid stats or gamma stats
const flavenoidStats = calculateByClass(WineData, false);
const gammaAddedData = addGamma(WineData);

const gammaStats = calculateByClass(gammaAddedData, true);

const renderTable = (data: Record<number, ClassStats>) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
            Measure
          </th>
          {Object.keys(data).map((className) => (
            <th
              key={className}
              className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
            >
              Class {className}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="odd:bg-gray-100">
          <td className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Flavonoid Mean</td>
          {Object.values(data).map((stats, index) => (
            <td key={index} className="py-2 px-4 border-b border-gray-200">
              {stats.mean}
            </td>
          ))}
        </tr>
        <tr className="even:bg-white">
          <td className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
            Flavonoid Median
          </td>
          {Object.values(data).map((stats, index) => (
            <td key={index} className="py-2 px-4 border-b border-gray-200">
              {stats.median}
            </td>
          ))}
        </tr>
        <tr className="odd:bg-gray-100">
          <td className="py-2 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Flavonoid Mode</td>
          {Object.values(data).map((stats, index) => (
            <td key={index} className="py-2 px-4 border-b border-gray-200">
              {stats.mode.length === 0 ? 'No Mode' : stats.mode[0]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

function App() {
  return (
    <div className="p-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Flavonoids Statistics</h1>
        {renderTable(flavenoidStats)}
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Gamma Statistics</h1>
        {renderTable(gammaStats)}
      </div>
    </div>
  );
}

export default App;
