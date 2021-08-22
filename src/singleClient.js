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

export default function Example() {
  return (
    <div className="p-10">
      <ul>
        {client.map((person) => (
          <li key={person.email} className="p-3 ml-10 flex border">
            <div className="p-3">
              <span className="text-xg font-medium text-gray-900">{person.name} {person.lastName}</span>
              <br />
              <span className="text-lg text-gray-500">E-mail: {person.email}</span>
              <br />
              <span className="text-lg text-gray-500">Telefone: {person.phone}</span>
              <br />
              <span className="text-lg text-gray-500">Cep: {person.cep}</span>
              <br />
              <span className="text-lg text-gray-500">Endereço1: {person.address1}</span>
              <br />
              <span className="text-lg text-gray-500">Endereço2: {person.address2}</span>
              <br />
              <span className="text-lg text-gray-500">Data de Nascimento: {person.born}</span>
              <br />
              <span className="text-lg text-gray-500">CPF: {person.cpf}</span>
              <br />
              <span className="text-lg text-gray-500">Renda: R${person.incoming}</span>
            </div>
          </li>
        ))}
      </ul>
        <button className="text-lg mt-8">Voltar</button>
    </div>
  )
}