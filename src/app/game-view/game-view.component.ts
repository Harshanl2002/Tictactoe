import { Component } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent {

  isX=true;
  str:string[]=["","","","","","","","","",""];
  b:boolean[]=[false,false,false,false,false,false,false,false,false];
  checkval=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2],[8,4,0]];
  winnerselect!:string;
  draw=this.isdraw();
  onblockclick(a:number)
  {
    
    if(!this.b[a-1]&&!this.winnercheck())
    {
      console.log(a,this.b[a-1]);
      this.b[a-1]=true;
      this.str[a-1]=this.isX?'X':'O';
      this.draw=this.isdraw();
      this.isX=!this.isX;
    }
  }
  OnReset()
  {
    this.b=[false,false,false,false,false,false,false,false,false];
    this.str=["","","","","","","","","",""];
    this.isX=true;
  }
  getplayer()
  {
    return this.isX?"X\'s move":"O\'s move";
  }
  winnerplayer()
  {
    return this.winnercheck()?!this.isX?"X is the winner":"O is the winner":this.str.join("").length==9?"Draw":this.getplayer();
  }
  isdraw()
  {
    if(this.winnerplayer()==="Draw")
    {
      return true;
    }
    return false;
  }
  winnercheck()
  {
    let stri=this.str;
    if(stri.join("").length>3)
    {
      for(let s of this.checkval)
      {
        if(stri[s[0]]!==""&&stri[s[1]]!==""&&stri[s[2]]!=="")
        {
          if((stri[s[0]]===stri[s[1]])&&(stri[s[2]]===stri[s[1]])&&(stri[s[0]]===stri[s[2]]))
          {
            return true;
          }
        }
      }
    }
    return false;
  }
}
