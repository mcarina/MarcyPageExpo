import { Code, Terminal, Layout } from "lucide-react"
import CardSobreMim from "./CardSobreMim"

function SobreMim() {
  return (
    <section className="about">
        <div className="container mx-auto px-4 text-center mb-12">
        <h1>
            Sobre Mim
        </h1>
        <p className="p-subtext text-muted-foreground">Sou brasileira de Manaus-Amazonas.</p>
        </div>

        <div  className="about-container2">
            <div className="">
                <image src="" className="w-full h-auto object-cover"/>
            </div>

            <div className="space-y-6">
                <h2>
                    call me by my name
                </h2>
                <p className="text-muted-foreground">
                    Sou uma desenvolvedora Full Stack apaixonada por criar experiências web incríveis. Com experiência
                    <br/>
                    em Next.js, React, Laravel e Python, adoro enfrentar desafios e transformar ideias complexas em soluções
                    <br/>
                    elegantes e eficientes.
                </p>
                <p className="text-muted-foreground">
                    Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo para 
                    <br/>
                    projetos open-source ou mentorando desenvolvedores iniciantes.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Code/>
                    <Terminal/>
                    <Layout/>
                </div>            
            </div>
        </div>
        
        <CardSobreMim/>

    </section>
  
)
}

export default SobreMim