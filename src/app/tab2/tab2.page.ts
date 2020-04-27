

import { Component } from '@angular/core';

import { products } from '../products';
import { IonButton } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products = products;
  x = "default";
  constructor() { }
  

  jsoupBut() {
    window.alert("hh");
  }

  share() {
    
    
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  change() {
    window.alert('The product has been shared');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("DOMT").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "assets/tTest.txt", true);
    xhttp.send();
    
    if (this.x == "danger") {
      document.getElementById("Domt").color = "default";
      this.x = "default";
    } else {
      document.getElementById("Domt").color = "danger";
      this.x= "danger"
    }
  }
}
