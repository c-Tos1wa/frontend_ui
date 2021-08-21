import react from 'react';

export default function Form(props) {
  return (
    <div className=" bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded">
        <h2 className="text-center text-4xl font-extrabold mb-4">Cadastre-se aqui</h2>
        <p className="text-center text-lg mb-4">Parte 1/3</p>
        <form className="cursor-text space-y-5 text-center">
          <div>
            <input
              className="border border-gray-300 w-full p-2 text-lg"
              label={props.name}
              type={props.text}
              placeholder={props.placeholder}
            />
          </div>
          
          <button className="bg-red-400 w-full text-white border border-red-400 rounded p-2">Próximo</button>





        </form>
      </div>
    </div>
  )
}