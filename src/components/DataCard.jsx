export default function DataCard({
  data,
  comparisonData,
  prediction,
  message,
}) {
  return (
    // display tailwind table of data
    <>
      {/* Tailwind table consisting of feature name, user data(data) and will compare against comparisonData */}
      <div className='grid justify-items-center'>
        {!prediction?.prediction ? (
          <div className='bg-green-500 text white text-center  rounded-lg border shadow-lg p-4 m-2 my-10'>
            <h1 className='text-2xl font-bold'>{message}</h1>
            <p className='text-xl mt-4'>Probablity: {prediction.yes * 100}%</p>
          </div>
        ) : (
          <div className='bg-red-500 text white text-center rounded-lg border shadow-lg p-2 m-2 my-10'>
            <h1 className='text-2xl font-bold'>{message}</h1>
            <p className='text-xl mt-4'>Probablity: {prediction.yes * 100}%</p>
          </div>
        )}
        <table className='table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Feature</th>
              <th className='px-4 py-2'>Your Data</th>
              <th className='px-4 py-2'>Standard</th>
              <th className='px-4 py-2'>Diff</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => {
              const counterpart = data.find((dataItem) => {
                return dataItem.feature_name === item.feature_name;
              });

              const diff = Math.abs(
                counterpart?.current_value - item.standard_value
              );

              const is10percent = diff < 0.1 * item.standard_value;

              return (
                <tr
                  key={index}
                  // if the difference between the user data and standard data is less than 10% of the standard data, then the row will be green, else red
                  className={`${
                    is10percent ? "bg-green-200" : "bg-red-200"
                  } border px-4 py-2`}
                >
                  <td className='border px-4 py-2'>{item.formal_name}</td>
                  <td className='border px-4 py-2'>
                    {counterpart?.current_value}
                  </td>
                  <td className='border px-4 py-2'>{item.standard_value}</td>
                  <td className='border px-4 py-2'>{diff.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
