import {useContext,createContext,useState,useEffect} from "react"




const Tema = createContext() // isso server para podermos criar  um state de 
// um componente para outro

export default function TemaProvider({children}){
    const [tema,setTema] = useState(localStorage.getItem("tema") !== "dark" ? "light" : "dark" );

      //esse localstorage vai passar por um verificação para saber qual o tema atual isso server para setar o tema de forma certa sem que retorve algum valor vazio ou errado


    useEffect(()=>{
    
const root = window.document.documentElement;

//essa constante vai possibilita podernos allterar o valor da class do body

const removerTemaAntigo = tema === "dark" ? "light" : "dark"
root.classList.remove(removerTemaAntigo)
root.classList.add(tema)
localStorage.setItem("tema" , tema)

    },[tema])

    //esse useEfect vai ser ativado toda vez que mudar o valor do tema
    //como o valor do tema alterado ele vai passar por uma verificação para ver o tema que estava ante se o tema autal for dark exclua o tema antigo light caso contario excula o dark

    //pos a verficação do tema antigo ele vai adicionar na class do body p tema novo e esse tema vai ser armazenado no nosso localstorage

  

    return(
        <Tema.Provider value={{tema,setTema}}>
            {children}
        </Tema.Provider>
    )

    //essa funcitiob vai retornar um ela mesmo so que com o .Proiveder esse 
    //componente vai ter o seu value de acordo com o tema e vai alterar junto o value dos temas de seus filhos por isso descontruimos a props para children

}


// esse useTema ele vai retornar o state tema criado
export function useTema(){
return useContext(Tema)
}