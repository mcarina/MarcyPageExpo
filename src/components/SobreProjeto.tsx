"use client"

import { useState } from 'react';
import { motion } from "framer-motion"
import { FileDown } from "lucide-react"

export const SobreProjeto = () => {
    const [openProject, setOpenProject] = useState(false)

    const toggleProject = () => {
        setOpenProject(prev => !prev);
    }
    
return (
    <>
    <button onClick={toggleProject} className="p-6 border rounded-2xl group font-mono">
        <span className="text-primary mr-2">&gt;</span>
        ~/Sobre o projetos
    </button>

    {openProject && (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        >

            <div className="p-6 border rounded-2xl bg-secondary/20">
                <h2 className="flex items-center gap-2">
                    <FileDown className="w-5 h-5 text-primary" />
                    <span className="text-primary">&gt;</span> Sobre o Projeto
                </h2>

                <div className="space-y-6 text-muted-foreground">
                    <p>Este é um portfólio interativo com um tema inspirado em terminal/CMD, onde apresento
                    <br></br> 
                    meus projetos de forma dinâmica e estilizada.
                    <br></br>
                    Um projeto bem estruturado, componetizado, intuitivo, dinâmico e leve, proporcionando 
                    <br></br>
                    uma experiência fluida para os usuários.</p>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Com Next.js e Docker</h3>
                    <pre className="whitespace-pre-wrap">
                    {`Next.js estrutura robusta e moderna para desenvolvimento web:

    [+] App Router para roteamento baseado em arquivos
    [+] Componentes Server e Client-side
    [+] Suporte TypeScript nativo
    [+] Estilização com TailwindCSS

Docker facilita o ambiente de desenvolvimento e o deploy:

    [+] Ambientes consistentes e replicáveis
    [+] Fácil integração e escalabilidade
    [+] Containerização para facilitar o deploy em qualquer servidor
    [+] Isolamento de dependências e configurações`}
                    </pre>
                </div>


                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Aprendizados</h3>
                    <pre className="whitespace-pre-wrap">
                    {`Este projeto serve como exemplo prático de:

    [1] Organização de código em uma aplicação Next.js
    [2] Implementação de layouts responsivos
    [3] Gerenciamento de estado com React Hooks
    [4] Animações com Framer Motion
    [5] Estilização moderna com TailwindCSS
    [6] Boas práticas de componentização`}
                    </pre>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Recursos e Ferramentas</h3>
                    <pre className="whitespace-pre-wrap">
                    {`Tecnologias utilizadas no desenvolvimento:

    [*] Next.js 14
    [*] Node 20 lts
    [*] TailwindCSS para estilização
    [*] TypeScript para type safety
    [*] Framer Motion para animações
    [*] Lucide Icons para ícones
    [*] Docker para isolamento de ambiente e deploy`}
                    </pre>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Estrutura do Projeto</h3>
                    <pre className="p-4 border bg-card text-sm">
                    {`src/
    ├── app/
    │   ├── layout.tsx       
    │   ├── page.tsx                # Homepage
    │   ├── global.css              # Estilos globais
    │   ├── Dashboards/             # Dashboards route
    │   ├── Projects/               # Projetos route
    │   │        ├──_component/     # componentes do projeto
    │   │        └── [id]/          # pagina individual por projeto
    │   └── Sobre-Mim/              # Sobre route
    │            └──_component/     # componentes do terminal
    ├── components/                 # Componentes reutilizáveis 
    ├── lib/ 
    │     └── constants/            # constants navbar
    └──docker-compose.yml           # Docker compose`}
                    </pre>
                </div>

                <div className="mt-8 pt-4 border-t">
                    <pre className="text-sm text-center">
                    {`/* Este projeto é open source e pode ser usado como
    * referência para aprender Next.js e React
    */`}
                    </pre>
                </div>
                </div>

            </div>

    </motion.div>

    )}

    </>
)
}
