import react from 'react';
import Form from './form'

export default function Third(props) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded">
        <h2 className="text-center text-4xl font-extrabold mb-4">Cadastre-se aqui</h2>
        <p className="text-center text-lg mb-4">{`Parte ${props.number}/3`}</p>
        <form className="cursor-text space-y-4 text-center">
          <div className="space-y-4">
            <Form label='data_nascimento' type='text' placeholder='Data de Nascimento' />
            <Form label='cpf' type='date' placeholder='CPF' />
            <Form label='renda_mensal' type='number' placeholder='Renda Mensal' />
          </div>
          
          <button className="bg-green-400 text-white text-lg rounded p-2 hover:bg-green-900">Salvar</button>
        </form>
      </div>
    </div>
  )
}