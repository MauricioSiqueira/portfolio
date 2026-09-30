export function Footer(){
    return (
      <footer className="text-center flex justify-between">
        <p>&copy; { new Date().getFullYear()} Mauricio Bernardo. Todos direitos reservados.</p>        
        <a href="#header" className="text-xs underline">
            BACK TO TOP ⬆
        </a>
      </footer>  
    )
}