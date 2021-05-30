import React from 'react'

function FormGroup({label, hint, error, ...props}) {
  return (
    <div className="v-layout align-stretch">
      <div className="form-group mt flex-nowrap">
        {label && <label style={{minWidth: '30%'}} className="mr">{label}</label> }
        <div className="v-layout flex-grow align-stretch">
          <input {...props}/>
        </div>
      </div> 
      { hint && <div className="mb text-sm text-hint">{hint}</div> }
      { error && <div className="mb text-sm text-hint">{error}</div> }
    </div> 
  )
}

export default FormGroup
