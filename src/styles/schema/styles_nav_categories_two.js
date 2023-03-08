export default class Schema_styles_nav_categories_two{
    static model(){
        return {
            prev : {},
            next : {},
            content_slider_nav_categories : {}
        }
    }
    static selected_item_playlist(num){
        switch(num){
            case 1:
                return {
                    background: "var(--color-text-primary)",
                    color: "var(--color-font-primary)"
                }
            case 2:
                return {
                    background: "var(--color-font-secondary)",
                    color: "var(--color-text-primary)"
                }
        }
    }
    static format(num){
        switch(num){
            case 1: 
            return {
                next : {
                    right : "-102px"
                },
                prev : {
                    display : "block"
                },
                content_slider_nav_categories : {
                    width : "490px"
                }
            }
            case 2:
            return {
                prev : {
                    display : "block"
                }
            }
            case 3:
            return {
                prev : {
                    display : "none",
                }
            }
            case 4:
            return {
                prev : {
                    display : "block"
                }
            }
        }
    }
}