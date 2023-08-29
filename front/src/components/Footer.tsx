function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-roboto py-4 px-6 text-center text-sm">
      <div className="flex items-center justify-between font-normal">
        <a href="#" className="hover:text-blue-300">
          Redes Sociais
        </a>
        <a href="#" className="hover:text-blue-300">
          Contato
        </a>
        <a href="#" className="hover:text-blue-300">
          Suporte
        </a>
        <a href="https://www.gov.br/mds/pt-br/acesso-a-informacao/lgpd" target="_blank" className="hover:text-blue-300">
          LGPD
        </a>
      </div>
      <div className="mt-5 text-xs">
        <p>Todos os Direitos Reservados © {new Date().getFullYear()}</p>
        <p>Desenvolvido pelo Senai Cimatec</p>
      </div>
    </footer>
  );
}

export default Footer;
