"use client"

import { motion } from "framer-motion"
import { Code, Terminal, Layout } from "lucide-react"
import Link from 'next/link'

function CardProjects() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
  >
    <Link href="/Projects/frontend" className="group card-containers">
      <Code className="icons-card text-primary" />
      <h3 className="text-xl font-semibold mb-2">Front-end</h3>
      <p className="text-muted-foreground">
        Criando interfaces com Next.js, React e TailwindCSS
      </p>
    </Link>

    <Link href="/Projects/backend" className="group card-containers">
      <Terminal className="icons-card text-primary" />
      <h3 className="text-xl font-semibold mb-2">Back-end</h3>
      <p className="text-muted-foreground">Desenvolvendo APIs robustas e elegantes com Laravel e Python</p>
    </Link>
    <Link href="/Dashboards" className="group card-containers">
      <Layout className="icons-card text-primary" />
      <h3 className="text-xl font-semibold mb-2">Dashboards</h3>
      <p className="text-muted-foreground">Visualização de dados que contam histórias e geram insights</p>
    </Link>

  </motion.div>
  )
}

export default CardProjects