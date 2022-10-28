import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor() { }

  load(archives:string[]){
    for(let i = 0;i<archives.length;i++){
      let script = document.createElement("script");
      script.src="./assets/js/" + archives[i]+ ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script)

    }
  }
}
