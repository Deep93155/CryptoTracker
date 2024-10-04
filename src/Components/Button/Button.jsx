import { useParams,useNavigate} from "react-router-dom";
// import fetchInfo from "../../services/fetchCoinInfo";

// eslint-disable-next-line react/prop-types
function Button(){
    const {Id} = useParams()
    const navigator = useNavigate();
    function clickHandler(id){
        console.log("In clickhandler id is",id)
        navigator(`/details/${id}/moreInfo`,{state:Id});
    }

    return(
        <div>
             <button onClick={()=>{return clickHandler(Id) }} className="btn btn-primary caret-lime-400 text-xl font-semibold">
                click for more</button>
        </div>
    )
}
export default Button;
