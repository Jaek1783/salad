import {db} from "./../firebase";
import {collection, doc,getDocs, updateDoc, deleteDoc, addDoc, getDoc} from "firebase/firestore";
const initState = {
    list:[
        {num:5, title:"", body:""},
    ]
}
//Action
const LOAD = "real/LOAD";
const CREATE = "real/CREATE";
const DELETE = "real/DELETE";

export const loadReal = (Real_list)=>{
  return{type:LOAD, Real_list}; 
}
export const createReal = (real)=>{
    return{type:CREATE, real}
};
export const deleteReal = (index)=>{
  return{type:DELETE, index}
};

// Middlewares
export const loadRealFB = () =>{
  return async function (dispatch) {
    const Real_data = await  getDocs(collection(db,"salad"));
    let R_list = [];
    Real_data.forEach((s)=>{
      R_list.push({id: s.id, ...s.data()});
    });
    dispatch(loadReal(R_list));
  }
}
export const addRealFB = (real)=>{
  return async function (dispatch){
    const docRef = await addDoc(collection(db, "salad"), real);
    const _docRef = await getDoc(docRef);
    const Real_data = {id:_docRef.id, ..._docRef.data()};
    dispatch(createReal(Real_data));
  }
}
export const deleteRealFB = (Real_id)=>{
  return async function (dispatch, getState) {
    const docRef = doc(db,"salad",Real_id);
    await deleteDoc(docRef);
    const real_list = getState().Real.list;
    const real_index = real_list.findIndex((s)=>{
      return s.id === Real_id; 
    })
   dispatch(deleteReal(real_index)); 
  } 
}
export default function reducer(state = initState, action = {}) {
    switch (action.type) {
      case "real/LOAD": 
        return{list: action.Real_list};
      case "real/CREATE":
        const new_salad_list = [...state.list, action.real];
        return { list: new_salad_list };

      case "real/DELETE":
        const salad_list = state.list.filter((l,idx)=>{
          return action.index !== idx;

        })
        return{list:salad_list};  
  
      default:
        return state;
    }
  }