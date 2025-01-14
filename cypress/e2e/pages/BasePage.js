import HeaderComponent from "../components/HeaderCOmponent";

class BasePage{
    constructor(){
        this.header = new HeaderComponent();
    }

    open(path){
        return cy.visit(path)
    }
}

export default BasePage;