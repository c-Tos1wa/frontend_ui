import react from 'react';
import Form from '../form'

export default function Second(props) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded">
        <h2 className="text-center text-4xl font-extrabold mb-4">Cadastre-se aqui</h2>
        <p className="text-center text-lg mb-4">{`Parte ${props.number}/3`}</p>
        <form className="cursor-text space-y-4 text-center">
          <div className="space-y-4">
            <Form label='cep' type='text' placeholder='CEP' />
            <Form label='endereco1' type='text' placeholder='Endereço 1' />
            <Form label='endereco2' type='email' placeholder='Endereço 2' />
          </div>
          
          <button className="bg-red-400 text-white text-lg rounded p-2 hover:bg-purple-500">Próximo</button>
        </form>
      </div>
    </div>
  )
}