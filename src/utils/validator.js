

export const validateEvent = (event) =>{

    let result = {valid:true,errors:[]};

    if(!event){
        result.valid = false;
        result.errors.push("Application error")
    }
    if(!event.name || !event.firstName || !event.lastName || !event.email || !event.date){
        result.valid = false;
        result.errors.push("Missing fields")
    }

    let today = new Date(Date.now());
    today.setHours(0,0,0,0);
    if(today.getTime() > event.date){
        result.valid = false;
        result.errors.push("Incorrect date")
    }
    if(!/(.+)@(.+){2,}\.(.+){2,}/.test(event.email)){
        result.valid = false;
        result.errors.push("Incorrect email")
    }
    for(let key in event){
        if(event.hasOwnProperty(key)){
            if(event[key].length > 30 ){
                result.valid = false;
                result.errors.push("Too long data (max 30)");
            }
        }
    }
    return result;

};