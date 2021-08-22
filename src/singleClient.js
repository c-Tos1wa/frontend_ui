import React from 'react';


const client = [
  {
    name: 'Alessandra',
    lastName: 'Andrade',
    email: 'alessandra.andrade@example.com',
    phone: '86321-4579',
    cep: '01287-000',
    address1: 'Rua das Almeidas',
    address2: 'Rua Flora',
    born: '03/10/1990',
    cpf: "315.994.368-90",
    incoming: 4000
  },
  
]

export default function ClientData() {
  return (
    <div className="p-5 m-10 border rounded shadow-xl">
      <ul>
        {client.map((person) => (
          <li key={person.email} className="p-3 ml-3">
            <div>
              <span className="text-xg font-medium text-red-500">{person.name} {person.lastName}</span>
              <div className="py-5">
                <p className="text-lg py-1 text-gray-500">E-mail: {person.email}</p>                
                <p className="text-lg py-1 text-gray-500">Telefone: {person.phone}</p>                
                <p className="text-lg py-1 text-gray-500">Cep: {person.cep}</p>                
                <p className="text-lg py-1 text-gray-500">Endereço1: {person.address1}</p>                
                <p className="text-lg py-1 text-gray-500">Endereço2: {person.address2}</p>                
                <p className="text-lg py-1 text-gray-500">Data de Nascimento: {person.born}</p>                
                <p className="text-lg py-1 text-gray-500">CPF: {person.cpf}</p>                
                <p className="text-lg py-1 text-gray-500">Renda: R${person.incoming}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
        <button className="bg-blue-500 text-white p-2 text-lg hover:bg-purple-900">Voltar</button>
    </div>
  )
}