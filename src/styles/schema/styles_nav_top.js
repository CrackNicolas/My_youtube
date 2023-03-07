export default class Schema_styles_nav_top{
    static model(){
        return {
            left : "",
            animation : ""
        }
    }
    static format(num){
        switch(num){
            case 1:
                return {
                    left: "0px",
                    animation : "animate_nav_items_menu_view 0.4s"
                }
            case 2:
                return {
                    left: "-236px",
                    animation : "animate_nav_items_menu_hidden 0.4s"
                }
        }
    }
}