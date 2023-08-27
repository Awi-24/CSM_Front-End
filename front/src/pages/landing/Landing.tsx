import Eventos from "../../components/Eventos"




function Landing() {

  return (
    <div className="bg-landing  bg-cover">
      <div></div>
      <div className="flex flex-col justify-center items-center h-screen w-full"
      style={{ backgroundImage: `url(${'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?cs=srgb&dl=pexels-belle-co-1000445.jpg&fm=jpg'
       })`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <Eventos image={""} title={""} text={""} />
      </div>
      <div>
        TESTE
      </div>
    </div>
  )
}

export default Landing