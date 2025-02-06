export default function Home() {
  return (
    <pre className='flex h-full flex-col items-center justify-center space-y-2.5 whitespace-pre md:space-y-3'>
      <code className='text-[2dvw] leading-[0.9] tracking-normal lg:text-[1.4dvh] select-none'>{ascii}</code>
      <code className='text-center text-sm md:text-base'>
        <p>Full Stack web developer</p>
        <p>Aprendendo e resolvendo novos problemas de codigo</p>
      </code>
    </pre>


);
}

const ascii = `
 __ __    __   ____.   ___   _ _   ____  _ _  ____  _____ 
(  V  )  /__.  |  _ . / __) ( V ) ( ___)( V )(  _  (  _  )
)     ( /.__ . |   . ( (__     /  | __)  ) ( | ___/  |_| | 
(_V¨V_)(__)(__)|_. _)  ___) __/   (____)(_V_)(__)  (_____)

`