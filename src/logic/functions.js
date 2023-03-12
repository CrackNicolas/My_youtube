import {key,url} from '../service/config/credentials.js';

export function get_petition_url(partial){
    return url + partial + "&key="+ key;
}
export function get_search_param(search){
    let query = new URLSearchParams(search).get("search_query");
    return (query==="" || query===null)? null : query;
}
export function get_url_player(id){
    return "https://www.youtube.com/embed/"+id;
}
export function get_time_elapsed(fecha_emit){
    let fecha_emision = new Date(fecha_emit.split("T")[0]).getTime();
    let fecha_actual = new Date().getTime();
    let dias = Math.round((fecha_actual - fecha_emision) / (1000*60*60*24));
  
    if(dias < 30){
        return "hace " + dias+" "+( (dias===1)? "dia" : (dias>1)? "dias":"hora");
    }
    if(dias > 30 && dias <= 365){
        return "hace " + Math.round(dias/30)+" meses";
    }
    if(dias > 365){
        return "hace " + Math.round(dias/365)+" años";
    }
    return null;
}
export function get_duration_video(duration){
    let time = duration.replace("PT","");
    let includes_hours = time.includes("H"), includes_minutes = time.includes("M"), includes_seconds = time.includes("S");
    let silabas = time.split(/[H|M|S]/);

    if(includes_hours && !includes_minutes && !includes_seconds){
        return silabas[0]+":00:00";
    }
    if(!includes_hours && includes_minutes && !includes_seconds){
        return (silabas[0]<=9)? ("0"+silabas[0]+":00") : (silabas[0]+":00");
    }
    if(!includes_hours && !includes_minutes && includes_seconds){
        return (silabas[0]<=9)? ("00:0"+silabas[0]) : ("00:"+silabas[0]);
    }
    if(includes_hours && includes_minutes && !includes_seconds){
        return silabas[0] + ":" + ((silabas[1]<=9)? "0"+silabas[1] : silabas[1]) + ":00";
    }
    if(includes_hours && includes_minutes && includes_seconds){
        return silabas[0] + ":" + ((silabas[1]<=9)? "0"+silabas[1] : silabas[1]) + ":" + ((silabas[2]<=9)? "0"+silabas[2] : silabas[2]);
    }
    if(!includes_hours && includes_minutes && includes_seconds){ 
        return ((silabas[0]<=9)? "0"+silabas[0] : silabas[0]) + ":" + ((silabas[1]<=9)? "0"+silabas[1] : silabas[1]);
    }
    if(includes_hours && !includes_minutes && includes_seconds){
        return silabas[0] + ":00:" + ((silabas[1]<=9)? "0"+silabas[1] : silabas[1]);
    }
}
export function get_count(value){   
    return new Intl.NumberFormat('es-ES').format(value);
}
export function get_convert_cantidad(value){
    if(value >= 1000000){
        let new_valor = (value / 1000000).toString().slice(0,4);
        if(new_valor.split(".")[1]===""){
            return new_valor.replace(".","") + " M ";
        }
        return get_count(new_valor) + " M ";
    }
    return get_count(value);
}
export function get_description(description){
    return description;
}