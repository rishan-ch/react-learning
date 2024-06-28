// const person={
//     image : "https://i.imgur.com/7vQD0fPs.jpg",
// }
export default function({name, college="Islington"}){
    
    return(
        <div>
        <div className="card" style={{width: '15rem'}}>
            <img src={""} className="card-img-top"  alt="..." style={{width:'100%'}}/>
            <div className="card-body">
                <h5 className="card-title">{name} {college}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    );
}