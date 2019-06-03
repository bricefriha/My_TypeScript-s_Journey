
class Message 
{
    private firstPart: string;
    private secondPart: string;

    //Constructor of the 
    constructor(firstPart: string, secondPart: string) 
    {
        this.firstPart = firstPart;
        this.secondPart = secondPart;
    }
    //
    //Encapse
    //
    // Getters
    getFirstPart() : string
    {
        return this.firstPart;
    }
    getSecondPart() : string
    {
        return this.secondPart;
    }
    getFullMessage() : string
    {
        return this.firstPart +" "+ this.secondPart+" !!!";
    }
    //
    // Setters
    setFirstPart(fp : string)
    {
        this.firstPart = fp
    }
    setSecondPart(sp : string)
    {
        this.firstPart = sp
    }

}
export{Message};