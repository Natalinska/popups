import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <div class="burial">
<div class="glyphicon glyphicon-info-sign"  (click)="modal1.show()"></div>
  <app-modal #modal1>
    <div class="app-modal-header" >
      Burial Chamber
    </div>
    <div class="app-modal-body">
     <p>For each stone delivered here, the owner of the stone
     earns <span style="font-weight:bold">points at the end of the game</span>. Stones are placed
     column by column, placement <span style="font-weight:bold">begins at 
     the top left</span> until the column is full. Then continue to the next column, 
     starting again from the top.</p>

     <p> At the end of the game, points are earned as follows:
     Each area consisting of <span style="font-weight:bold">
     one or more connected stones </span> of a single color yields a 
     certain number of points depending on the number of stones. 
     Connected stones must be touching along at least one side. 
     <div style="text-align:center;">
<table class="tg"  style="margin: 0 auto;">
<tr>
    <th class="tg-qzwb">Number of stones</th>
    <th class="tg-83xm">1x</th>
    <th class="tg-83xm">2x</th>
    <th class="tg-83xm">3x</th>
    <th class="tg-83xm">4x</th>
    <th class="tg-83xm">5x</th>
    <th class="tg-83xm">...</th>
  </tr>
  <tr>
    <td class="tg-a5p7">Points</td>
    <td class="tg-r9qi">1</td>
    <td class="tg-r9qi">3</td>
    <td class="tg-r9qi">6</td>
    <td class="tg-r9qi">10</td>
    <td class="tg-r9qi">15</td>
    <td class="tg-r9qi">+2</td>
  </tr>
</table>
</div>

<p style="margin-top:2vw"> In areas with <span style="font-weight:bold"> more than 5 connected 
stones </span>, each additional connected stone yields an additional 2 points. </p>
<span style="font-weight:bold">Important:</span> Each player can get points for more than one “field” of connected stones.

    </div>
    <div class="app-modal-footer">
      <button type="button" class="btn btn-default" (click)="modal1.hide()">Ok</button>
    </div>
  </app-modal>
</div>

`,
styles:
[
  `
 .glyphicon {
    font-size: 3vw;
    color: #7a340d;
}
.burial {
    position :absolute;
    top:2vw;
    left:2vw;
}

.pyramids {
    position :absolute;
    top:10vw;
    left:2vw;

}

.market {
    position :absolute;
    top:2vw;
    left:10vw;

}

.temple {
    position :absolute;
    top:10vw;
    left:10vw;

}

.obelisks {
    position :absolute;
    top:10vw;
    left:5vw;
}


  `]
})
export class AppComponent {


}
