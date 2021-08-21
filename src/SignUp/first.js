import react from 'react';
import Form from '../form'

export default function First(props) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded">
        <h2 className="text-center text-4xl font-extrabold mb-4">Cadastre-se aqui</h2>
        <p className="text-center text-lg mb-4">{`Parte ${props.number}/3`}</p>
        <form className="cursor-text space-y-4 text-center">
          <div className="space-y-4">
            <Form label='nome' type='text' placeholder='Nome' />
            <Form label='sobrenome' type='text' placeholder='Sobrenome' />
            <Form label='email' type='email' placeholder='E-mail' />
            <Form label='telefone' type='text' placeholder='Telefone' />
          </div>
          
          <button className="bg-red-400 text-white text-lg border border-red-400 rounded p-2">Próximo</button>
        </form>
      </div>
    </div>
  )
}