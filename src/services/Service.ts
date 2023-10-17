import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export const buscarCategoria = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const cadastrarCategoria = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizarCategoria = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletarCategoria = async(url: string, header: Object) => {
  await api.delete(url, header)
}