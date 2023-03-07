export default class Schema_styles_nav_categories{
    static model(){
      return {
        prev : {},
        next : {},
        scroll_x : {},
        icon_prev : {},
        icon_next : {}
      }
    }
    static format(num){
      switch(num){
        case 1: 
          return {
            prev : {
              left : "75px"
            },
            next : {
              right : "-102px"
            },
            icon_prev : {
              left : "80px"
            },
            icon_next : {
              right : "-40px"
            }
          }
        case 2:
          return {
            prev : {
              left : "75px"
            },
            icon_prev : {
              left : "80px"
            }
          }
        case 3:
          return {
            prev : {
              left : "0px"
            },
            icon_prev : {
              left : "30px"
            },
            slider_x : {
              left : "90px",
              width : "85%"
            }
          }
        case 4:
          return {
            prev : {
              left : "75px"
            },
            icon_prev : {
              left : "80px"
            },
            next : {
              right : "0px"
            },
            icon_next : {
              right : "25px"
            }
          }
      }
    }
}