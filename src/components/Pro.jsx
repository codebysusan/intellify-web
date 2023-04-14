export default function Pro() {
  return (
    <div>
      <h1 className='font-bold text-3xl'>Pro</h1>
      <div className='flex flex-row mt-4'>
        <div className='w-2/3 p-8'>
          <p>data</p>
          <div className='flex flex-col'>
            <label htmlFor='age'>Age</label>
            <input type='text' id='age' />

            <label htmlFor='blood_pressure'>Blood Pressure</label>
            <input type='text' id='blood_pressure' />

            <label htmlFor='bmi'>BMI</label>
            <input type='text' id='bmi' />

            <label htmlFor='smoking_status'>Smoking Status</label>
            <input type='text' id='smoking_status' />

            <label htmlFor='hypertension'>Hypertension</label>
            <input type='text' id='hypertension' />

            <label htmlFor='cholesterol'>Cholesterol</label>
            <input type='text' id='cholesterol' />

            <label htmlFor='family_history'>Family History</label>
            <input type='text' id='family_history' />

            <label htmlFor='physical_activity'>Physical Activity</label>
            <input type='text' id='physical_activity' />
          </div>
        </div>
        <div className='w-1/3 p-8'>
          <p>Diseases</p>
          <div className='flex flex-col'>
            <div>
              <input type='checkbox' id='diabetics' />
              <label htmlFor='diabetics'>Diabetics</label>
            </div>

            <div>
              <input type='checkbox' id='heart' />
              <label htmlFor='heart'>Heart Disease</label>
            </div>

            <div>
              <input type='checkbox' id='stroke' />
              <label htmlFor='stroke'>Brain Stroke</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
