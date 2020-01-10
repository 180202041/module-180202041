import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { Http } from '@angular/http';


@Component({
  selector: 'app-ayt',
  templateUrl: './ayt.page.html',
  styleUrls: ['./ayt.page.scss'],
})
export class AytPage implements OnInit {
  turkce;
  mat;
  sosyal;
  fen;
  alanMat;
  alanFizik;
  alanKimya;
  alanBiyo;
  alanEdeb;
  alanTar1;
  alanCog1;
  alanTar2;
  alanCog2;
  alanFels;
  alanDin;
  alanDil;
  obp;

  constructor(public http: Http,
              public afStore: AngularFirestore,
              public service: UserService) { }

  aytHesap(){

    console.log('hesaplandı')
    var turkce = parseInt(this.turkce);
    var mat = parseInt(this.mat);
    var sosyal = parseInt(this.sosyal);
    var fen = parseInt(this.fen);
    var alanMat = parseInt(this.alanMat);
    var alanFizik = parseInt(this.alanFizik);
    var alanKimya = parseInt(this.alanKimya);
    var alanBiyo = parseInt(this.alanBiyo);
    var alanEdeb = parseInt(this.alanEdeb);
    var alanTar1 = parseInt(this.alanTar1);
    var alanCog1 = parseInt(this.alanCog1);
    var alanTar2 = parseInt(this.alanTar2);
    var alanCog2 = parseInt(this.alanCog2);
    var alanFels = parseInt(this.alanFels);
    var alanDin = parseInt(this.alanDin);
    var alanDil = parseInt(this.alanDil);
    var obp = parseInt(this.obp);

    var sayPuan = turkce*1.32+mat*1.32+sosyal*1.36+fen*1.36+alanMat*3+alanFizik*2.85+alanKimya*3.07+alanBiyo*3.07+obp*0.6+100;
    var sozPuan = turkce*1.32+mat*1.32+sosyal*1.36+fen*1.36+alanEdeb*3+alanTar1*2.80+alanCog1*3.33+alanTar2*2.91+alanCog2*2.91+alanFels*3+alanDin*3.33+obp*0.6+100;
    var esitPuan = turkce*1.32+mat*1.32+sosyal*1.36+fen*1.36+alanMat*3+alanEdeb*3+alanTar1*2.8+alanCog1*3.33+obp*0.6+100;
    var dilPuan = turkce*1.32+mat*1.32+sosyal*1.36+fen*1.36+alanDil*3+obp*0.6+100;

    var sayPuans = sayPuan,
        toString = sayPuans.toString(),
        toConcat = sayPuans + "";
    var sozPuans = sozPuan,
        toString = sozPuans.toString(),
        toConcat = sozPuans + "";
    var esitPuans = esitPuan,
        toString = esitPuans.toString(),
        toConcat = esitPuans + "";
    var dilPuans = dilPuan,
        toString = dilPuans.toString(),
        toConcat = dilPuans + "";

    this.afStore.doc(`users/${this.service.getUID()}`).update({
      posts: firestore.FieldValue.arrayUnion({
        sayPuans,
        sozPuans,
        esitPuans,
        dilPuans
      })
    })




    alert ('SAYISAL AYT PUANI : '+sayPuan )
    alert ('SÖZEL AYT PUANI : '+sozPuan )
    alert ('EŞİT AĞIRLIK AYT PUANI : '+esitPuan )
    alert ('DİL AYT PUANI : '+dilPuan )

  }
  ngOnInit() {
  }

}
