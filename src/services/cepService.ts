import axios from 'axios'

export async function viaCepConnection(cep: string) {
  const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);

  return response.data;
}
