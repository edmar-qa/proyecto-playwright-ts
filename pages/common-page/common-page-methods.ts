export class commonPageMethods{
constructor(page){
    this.page = page
}
    async navigateToTheApplication(){
        await this.page.goto{}
    }
}