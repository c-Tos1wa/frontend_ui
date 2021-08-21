import react from 'react';

export default function Form(props) {
  return (
    <input
      className="border border-gray-300 w-full p-2 text-lg"
      label={props.label}
      type={props.text}
      placeholder={props.placeholder}
    />
  )
}