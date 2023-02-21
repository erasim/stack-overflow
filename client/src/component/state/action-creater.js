
export const setUserRole=(role)=>{
    return(dispatch)=>{
        // console.log("check 1")
        dispatch({
            type:'AddRole',
            payload:role,
        })
    }
    }



export const withdralMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount,
        })
    }
    }
  

    export const addItem=(inputarr)=>{
        return(dispatch)=>{
            dispatch({
                type:'Add_to_Cart',
                payload:inputarr, 
        })
        }
    }

    export const removeItem=(inputarr)=>{
        console.log("inputarr",inputarr);
        return(dispatch)=>{
            dispatch({
                
                type:'Remove_to_Cart',
                payload:inputarr.i, 
        })
        }
    }

  

