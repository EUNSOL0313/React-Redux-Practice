import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Box from './component/Box'

function App() {
   //useSelector는 매개변수로 함수를 받는다.
   //state를 매개변수로 줌(store에 잇는 모든 state를 전달)
   //모든 state가 필요하지 않기 때문에 state.count를 준다
   const count = useSelector((state) => state.count)
   const id = useSelector((state) => state.id)
   const password = useSelector((state) => state.password)
   const reduce = useSelector((state) => state.reduce)

   const dispatch = useDispatch()

   const increase = () => {
      dispatch({ type: 'INCREMENT', payload: { num: 5 } })
      //action은 '{}' type: 액션의 이름, payload : 선택사항, 함수의 매개변수같은 성격, 내가 원하는 정보를 보내 줄 수 있음 필요
   }
   const login = () => {
      dispatch({ type: 'LOGIN', payload: { id: 'noona', password: '123' } })
   }
   const decrease = () => {
      dispatch({ type: 'DECREMENT', payload: { num: 2 } })
   }

   return (
      <div>
         <h1>
            id:{id} / pw:{password} / 증가:{count} /감소: {reduce}
         </h1>
         <button onClick={increase}>증가</button>
         <button onClick={login}>Login</button>
         <button onClick={decrease}>감소</button>
         <Box />
      </div>
   )
}

export default App
