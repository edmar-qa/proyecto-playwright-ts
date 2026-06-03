export class LoginPageData {
   static get credentials(){
        return{
            username:{
                standardUser: 'standard_user',
                locketOutUser: 'locked_out_user',
                problemUser: 'problem_user',
                performanceGlitchUser: 'performance_glitch_user',
                errorUser: 'error_user',
                visualUser: 'visual_user'
            },

            password:'secret_sauce'
                
        }
    }
}