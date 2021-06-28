import react, { useState } from 'react';
 const Compt1=(props)=>{
     console.log(props.Slides)
     const[click,setClick]=useState(0);
    
     const clickRestart=()=>{
         setClick(0);

     }
     const clickPre=()=>{
         click>0 && setClick(click-1);

     }
     const clickNext=()=>{
         click<props.Slides.length-1 && setClick(click+1);

     }
    return(
        <div>
            <h1 data-testid="title">{props.Slides[click].tittle}</h1>
            <p data-testid="text">{props.Slides[click].text}</p>
         
        <button data-testid="button-restart" disabled={click===0?true:false} onClick={clickRestart}>Restart</button>
        <button data-testid="button-prev" disabled={click===0?true:false} onClick={clickPre}>Pre</button>
        <button data-testid="button-next" disabled={click===props.Slides.length-1?true:false} onClick={clickNext}>Next</button>
        </div>
    )
}
export default Compt1;