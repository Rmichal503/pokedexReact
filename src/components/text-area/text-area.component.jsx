import './text-area.styles.css'

const PokeTextArea = (props)=>{
    console.log({props});
        if(props.stats){
            return(
            <div className={props.className}>
                {props.stats.map((el, index)=>{
                    return(
                        <div>
                            <ul>
                                <li key={index+200}>{el.stat.name.toUpperCase()}: {el.base_stat}</li>
                            </ul>
                            {/* <p key={index}>{el.stat.name.toUpperCase()}: {el.base_stat}</p> */}
                        </div>
                    )
                })}
            </div>)
        } 
        
        if(props.types){
            return(
                <div className={props.className}>
                    {props.types.map((type,index)=>{
                        return (<p key={index}>{type.type.name.toUpperCase()}</p>)
                    })}
                </div>)
        }
}

export default PokeTextArea