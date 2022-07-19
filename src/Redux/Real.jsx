const initState = {
    list:[
        {num:5, title:"너무 맛있어요", body:"너무 맛있게 잘먹었습니다."},
        {num:3, title:"싱싱한건 아니지만 그럭저럭 맛있네요", body:"아들이 좋아하네요 감사합니다"},
        {num:5, title:"ㄹㅇㅈㅁㅌ", body:"솔직히 기대 안햇는데 레알 좀맏탱"},
    ]
}
//Action
const CREATE = "real/CREATE";
const DELETE = "real/DELETE";

export const createReal = (real)=>{
    return{type:CREATE, real}
};
export const deleteReal = (index)=>{
  return{type:DELETE, index}
};
export default function reducer(state = initState, action = {}) {
    switch (action.type) {

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