import homeLogo from "../../assets/home.jpg";
import CardProduto from "../../components/produto/CardProduto";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-cyan-300 flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vinde!</h2>
            <p className="text-xl">Aqui você encontra medicamentos e cosméticos</p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-indigo-900 text-white py-2 px-4">
                Cadastrar Produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-2/3" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-gray-300 gap-2 h-96 px-2">
        <CardProduto valor={50} descricao="Vitamina D3 - Frasco com 50 comprimidos" caminhoImagem="/public/frasco.jpg"></CardProduto>
        <CardProduto valor={90} descricao="Lenços Umedecidos Oftálmicos" caminhoImagem="/public/remedio1.jpg"></CardProduto>
        <CardProduto valor={30} descricao="Creme Hidratante para as mãos" caminhoImagem="/public/remedio2.jpg"></CardProduto>
        <CardProduto valor={25} descricao="Paracetamol 750 mg - 20 comprimidos" caminhoImagem="/public/remedio3.jpg"></CardProduto>
        <CardProduto valor={85} descricao="Xarope para tosse - 250 ml" caminhoImagem="/public/remedio4.jpg"></CardProduto>
      </div>
    </>
  );
}

export default Home;
