export interface EventoProps {
  image: string;
  title: string;
  text: string;
}

const Eventos: React.FC<EventoProps> = ({ image, title, text }) => {
  return (
    <div className="w-3/4 h-3/5 bg-white rounded-xl shadow relative overflow-hidden border">
      <div className="absolute bottom-0 left-0 w-full rounded-none bg-gradient-to-t from-black to-transparent p-4">
        <h1 className="text-white font-medium font-roboto text-2xl sm:text-4xl md:text-5xl -mt-6 sm:-mt-8 md:-mt-10">
          {title || "Nome Evento"}
        </h1>
        <p className="text-white font-roboto font-extralight text-xs sm:text-sm md:text-base bg-opacity-60 p-2 break-words">
          {text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        </p>
      </div>
      <div
        className="h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image || 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?w=2000'})` }}
      >

      </div>
    </div>
  );
};

export default Eventos;
