import React from 'react'
import './index.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImArrowLeft2 } from "react-icons/im";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { useTema } from './mudarTema';



export default function App() {
  return (
    <>
      <MeuCarroseul />
    </>

  )
}

function MeuCarroseul() {

const {tema,setTema} = useTema()
   
  return (
      
    <div>
      <div className='flex itens-center justify-between '>
      <div>
      <p className='flex items-center gap-3 p-7  dark:text-white'><ImArrowLeft2 className='text-2xl hover:cursor-pointer dark:text-white'/> voltar</p>
      </div>
      <div>
        <p className='p-7'>
          
          {tema === "light" ? <WiMoonWaningCrescent3 className='text-3xl hover:cursor-pointer' onClick={()=>{setTema("dark")}} /> : <WiDaySunny className='text-3xl hover:cursor-pointer text-white'
          
          onClick={()=>{setTema("light")}}/> }
          
          
          </p>
      </div>
      </div>
    <div className="flex flex-col gap-10 justify-center align items-center  ola" >


     <h1 className='text-zinc-950 dark:text-white'>Login</h1> 
      <div className='flex w-1/2 h-1/2 bg-white lex flex-col justify-center  rounded-md px-8 shadow-lg shadow-zinc-500/40  '>


        <Form>
          <Form.Group className="mb-10" controlId="formBasicEmail">
            <Form.Label className="text-xl dark:text-zinc-950">Email address</Form.Label>
            <Form.Control type="email" className='h-12 dark:text-white' placeholder="Enter email" />
          
          </Form.Group>
          
          {/* <div className='h-10'></div> */}

          <Form.Group className="mb-10" controlId="formBasicPassword">
            <Form.Label className="text-xl dark:text-zinc-950">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className='h-12 dark:text-white' />
          </Form.Group>
          <Form.Group className="mb-10" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <Button variant="outline-primary" className='text-center flex'>Logar</Button>
            
 
        </Form>
      </div>
    </div>
    </div>
   

  )

}



