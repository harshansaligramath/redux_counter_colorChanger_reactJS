import randomColor from "randomcolor";
import { useDispatch, useSelector} from "react-redux";
import {change_Color} from "../Redux/color/colorSlice"
function Aside() {
  const color=useSelector(state=>state.color.value)
  const dispatch=useDispatch()
  const changeColor=()=>
  {
    dispatch(change_Color(
      {
        color:randomColor()
      }
    ))
  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
