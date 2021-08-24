import * as actions from "./actionTypes";

let LastId = 0; // counter para IDs

// export default function reducer(state = [], action) {
//   // state começa como uma Array vazia
//   if (action.type === actions.BUG_ADDED) {
//     //caso a ação seja bugAdded
//     return [
//       ...state, //returna o state inicial + um objecto novo.
//       {
//         id: ++LastId, //incremento do ID a cada objeto novo criado.
//         description: action.payload.description, //lança a descrição no payload
//         resolved: false, // começa como falso
//       },
//     ];
//   } else if (action.type === actions.BUG_REMOVED) {
//     //caso a ação seja remover um bug
//     return state.filter((bug) => bug.id !== action.payload.id); // devolve o estado filtrado, apos remover o ID que seja igual ao da ação.
//   } else if (action.type === actions.BUG_RESOLVED) {
//     return state.map((bug) =>
//       bug.id !== action.payload.id ? bug : { ...bug, resolved: !resolved }
//     );
//   } else return state; //caso nada se prove verdade, devolve o estado atual para evitar code break.
// }

//Exatamente o mesmo que em cima mas a utilizar um Switch em vez de if. Fazem o mesmo depende do pedido/maneira de programar.
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state, //returna o state inicial + um objecto novo.
        {
          id: ++LastId, //incremento do ID a cada objeto novo criado.
          description: action.payload.description, //lança a descrição no payload
          resolved: false, // começa como falso
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: !bug.resolved }
      );
    default:
      return state;
  }
}
