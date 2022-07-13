import './text-area.styles.css'

const PokeTextArea = (props)=>{
    console.log({props});
        if(props.stats){
            return(
            <div className={props.className}>
                        <div>
                            <ul>
                            {props.stats.map((el, index)=>{
                                return(<li className='statsLi'key={index+200}>{el.stat.name.toUpperCase()}: {el.base_stat}</li>)})}
                            </ul>
                        </div>
            </div>)
        } 
        
        if(props.types){
            return(
                <div className={props.className}>
                    {props.types.map((type,index)=>{
                        return (<span key={index}>{type.type.name.toUpperCase()}</span>)
                    })}
                </div>)
        }
}

export default PokeTextArea