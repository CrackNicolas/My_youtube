import {key,url} from '../service/config/credentials.js';

export function get_petition_url(partial){
    return url + partial + "&key="+ key;
}
export function get_search_param(search){
    let query = new URLSearchParams(search).get("search_query");
    return (query==="" || query===null)? null : query;
}
export function get_url_player(id){
    return "https://www.youtube.com/embed/"+id+"?autoplay=1";
}
export function get_url_player_short(id,activado){
    return "https://www.youtube.com/embed/"+id+"?autoplay="+activado+"&mute=0&fs=0&rel=0&showinfo=0&controls=1&modestbranding=1&cc_load_policy=1&iv_load_policy=3";
}
export function get_url_player_presentation(id){
    return "https://www.youtube.com/embed/"+id+"?autoplay=1&mute=1&fs=0&rel=0&showinfo=0&controls=1&modestbranding=1&cc_load_policy=1&iv_load_policy=3";
}
export function get_time_elapsed(fecha_emit){
    let date_issue = new Date(fecha_emit.split("T")[0]).getTime();
    let date_current = new Date().getTime();
    let days = Math.round((date_current - date_issue) / (1000*60*60*24));
  
    if(days < 1){
        let hour = (date_current - date_issue) / (1000*60*60*24) * 24;
        if(hour<1){
            let minute = hour * 60;
            if(minute<1){
                let seconds = Math.round(minute * 3600);
                return "hace "+(seconds)+" "+(seconds==1)?" segundo":" segundos";
            }
            return "hace "+(Math.round(minute))+" "+((Math.round(minute)==1)?" minuto":" minutos");
        }
        return "hace "+Math.round(hour)+" "+((Math.round(hour)==1)?" hora":" horas");
    }
    if(days <= 30){
        return (days==30)? "hace 1 mes" : "hace "+days+" "+((days===1)? "dia" : "dias");
    }
    if(days > 30 && days < 365){
        return "hace " + Math.round(days/30)+" meses";
    }
    if(days >= 365 && days < 730){
        return "hace 1 año";
    }
    if(days >= 730){
        return "hace " + Math.round(days/365)+" años";
    }
    return null;
}
export function get_duration_video(duration){
    let time = duration.replace("PT","");
    let includes_hours = time.includes("H"), includes_minutes = time.includes("M"), includes_seconds = time.includes("S");
    let syllabes = time.split(/[H|M|S]/);

    if(includes_hours && !includes_minutes && !includes_seconds){
        return syllabes[0]+":00:00";
    }
    if(!includes_hours && includes_minutes && !includes_seconds){
        return (syllabes[0]<=9)? ("0"+syllabes[0]+":00") : (syllabes[0]+":00");
    }
    if(!includes_hours && !includes_minutes && includes_seconds){
        return (syllabes[0]<=9)? ("00:0"+syllabes[0]) : ("00:"+syllabes[0]);
    }
    if(includes_hours && includes_minutes && !includes_seconds){
        return syllabes[0] + ":" + ((syllabes[1]<=9)? "0"+syllabes[1] : syllabes[1]) + ":00";
    }
    if(includes_hours && includes_minutes && includes_seconds){
        return syllabes[0] + ":" + ((syllabes[1]<=9)? "0"+syllabes[1] : syllabes[1]) + ":" + ((syllabes[2]<=9)? "0"+syllabes[2] : syllabes[2]);
    }
    if(!includes_hours && includes_minutes && includes_seconds){ 
        return ((syllabes[0]<=9)? "0"+syllabes[0] : syllabes[0]) + ":" + ((syllabes[1]<=9)? "0"+syllabes[1] : syllabes[1]);
    }
    if(includes_hours && !includes_minutes && includes_seconds){
        return syllabes[0] + ":00:" + ((syllabes[1]<=9)? "0"+syllabes[1] : syllabes[1]);
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
    const description_default = description.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
    if(description_default!=null){
        for(let i = 0 ; i < description_default.length ; i++){
            description = description.replace(description_default[i],`<a href=${description_default[i]} style="color: rgba(62,166,255,1.000)">${description_default[i]}</a> `+(i<3? "<br/><br/>": (i==9 || i==14)? "<br/><br/>" : "<br/>"));
        }
        let keys = description.match(/#[A-Za-z]+/g);
        if(keys!=undefined){
            for(let i = 0 ; i < keys.length ; i++){
                description = description.replace(keys[i],((i==0)?"<br/>":"")+`<a href=/hashtag/${keys[i].replace("#","")} style="color: rgba(62,166,255,1.000)">${keys[i]}</a><br/>`);
            }
        }
    }
    return description;
}