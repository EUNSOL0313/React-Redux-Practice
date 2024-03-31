let initialState = {
   count: 0,
   id: '',
   password: '',
   reduce: 20,
}
//reducer는 행동지침을 가지고 있다. if문/switch문법으로 씀

function reducer(state = initialState, action) {
   console.log('action은?', action)
   //IF문 행동지침
   //    if (action.type === 'INCREMENT') {
   //       return { ...state, count: state.count + 1 }
   //       //store은 reducer의 retrun으로 값을 변경해줌 항상 리턴해줘야함
   //       // ...state = state값이 여러개면 다른 state값은 유지하되 뒤의 값만 변경
   //       //...spread 문법을 통해서 기존 객체내용을 복하새 새로운 객체에 전달 가능 (store은 세부값은 못받고, 새주소값을 인식만함 )
   //    }
   //    return { ...state }

   //switch문 사용법
   switch (action.type) {
      case 'INCREMENT':
         return { ...state, count: state.count + action.payload.num }
      case 'LOGIN':
         return { ...state, id: action.payload.id, password: action.payload.password }
      case 'DECREMENT':
         return { ...state, reduce: state.reduce - action.payload.num }
      default:
         return { ...state }
   }
}

export default reducer
