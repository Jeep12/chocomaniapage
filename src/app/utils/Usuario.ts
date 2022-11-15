export class Usuario {
  displayName;
  access;
  email
  constructor (name:string, access:boolean, email:string ) {
      this.displayName = name;
      this.access = access;
      this.email = email;
  }
  toString() {
      return this.displayName + ', ' + this.access + ', ' + this.email;
  }
}

// Firestore data converter
const cityConverter = {
  toFirestore: (city:any) => {
      return {
          name: city.name,
          state: city.state,
          country: city.country
          };
  },
  fromFirestore: (snapshot:any, options:any) => {
      const data = snapshot.data(options);
      return new Usuario(data.name, data.state, data.country);
  }
};
