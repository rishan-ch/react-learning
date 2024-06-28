export default function NameList(){
    return(
        <>
            <Name name="Rishan" show={true}/>
            <Name name="Swagat" show={false}/>
            <Name name="Shreyash" show={false}/>
        </>

    );
}

function Name({name,show}){
    
    // if(show){
    //     return <li>{name} + </li>;
    // }
    // return <li>{name} - </li>;

    // return (
    //     <li>
    //         {show ? 
    //         name
    //         : <del>{name}</del>}
    //     </li>);
    return(
        <li>
        {name} {show && "-"}
        </li>
    );

}
