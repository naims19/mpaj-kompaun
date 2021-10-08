import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kompaun-pegawai',
  templateUrl: './kompaun-pegawai.page.html',
  styleUrls: ['./kompaun-pegawai.page.scss'],
})
export class KompaunPegawaiPage implements OnInit {

  date: string;
  type: 'string';

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

}
