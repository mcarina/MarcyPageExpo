"use client"
import { motion } from "framer-motion"
import { GraduationCap, Book, Mail } from "lucide-react"

function CardSobreMim() {
  return (
    <> 

    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="group hover:shadow-lg about-card">
            <div className="p-6">
              <GraduationCap className="icons-about" />
              <h3 className="text-xl font-semibold mb-2">Formada</h3>
              <p className="text-muted-foreground">Analise e Desenvolvimento de Sistemas</p>
              <p className="text-sm text-muted-foreground">Faculdade Martha Falcao - Wyden, 2021-2024</p>
            </div>
          </div>

          <div className="group hover:shadow-lg about-card">
            <div className="p-6">
              <Book className="icons-about" />
              <h3 className="text-xl font-semibold mb-2">Colaboradores</h3>
              <ul className="text-muted-foreground list-disc list-inside">
                <li>...</li>
                <li>...</li>
                <li>...</li>
              </ul>
            </div>
          </div>


          <div className="group hover:shadow-lg about-card">
            <div className="p-6">
              <Mail className="icons-about" />
              <h3 className="text-xl font-semibold mb-2">Contato</h3>
              <li>marciacarina931@gmail.com</li>
              <li>github.com/mcarina</li>
              <li>https://www.linkedin.com/in/marcia-carina/</li>
            </div>
          </div>

        </motion.div>

    </>
  )
}

export default CardSobreMim