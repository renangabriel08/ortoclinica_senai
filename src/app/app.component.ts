import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Storage } from '@ionic/storage-angular';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storage: Storage) {}

  async ngOnInit(): Promise<void> {
    await this.storage.create();

  }
}