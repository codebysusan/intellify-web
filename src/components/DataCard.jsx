export default function DataCard({ data, prediction, message }) {
  return (
    // display tailwind table of data
    <>
      {!prediction?.prediction ? (
        <div className='bg-green-500 text white text-center font-bold rounded-lg border shadow-lg p-10 m-2'>
          <h1 className='text-2xl'>{message}</h1>
        </div>
      ) : (
        <div className='bg-red-500 text white text-center font-bold rounded-lg border shadow-lg p-10 m-2'>
          <h1 className='text-2xl'>{message}</h1>
        </div>
      )}

      {/* tailwind table */}
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                  >
                    Feature
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => (
                  <tr key={key}>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <div className='flex items-center'>
                        <div className='ml-3'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {key}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <div className='flex items-center'>
                        <div className='ml-3'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {data[key]}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
