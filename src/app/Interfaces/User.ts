
export class User  {
  uid:string;
  displayName:string;
  email:string
  image:string;


    constructor(uid:string,displayName:string,email:string,image:string){
        this.uid=uid;
        this.displayName=displayName;
        this.email=email;
        this.image=image;
    }

    getUID():string{
        return this.uid;
    }
    getName():string{
        return this.displayName;
    }

    getEmail():string{
        return this.email;
    }
    getImage():string{
        return this.image;
    }
}