function day(){
    let fulldate = new Date();
    fulldate.toString();
    let date = fulldate.getFullYear() +"/"+ fulldate.getMonth() +"/"+ fulldate.getDate();
    return date;
}

export default function GetDay(){
    return(
        <>
            <h4>Today's Date = {day()}</h4>
        </>
    );
}

