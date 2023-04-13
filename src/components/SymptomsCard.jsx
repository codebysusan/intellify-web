import React from 'react'

function SymptomsCard(props) {
    return (
        <div>
            <div key={props.index} className='mx-3 bg-slate-200 px-4 py-2 my-3 rounded-lg'>
                {props.symptom}
            </div>
        </div>
    )
}

export default SymptomsCard
