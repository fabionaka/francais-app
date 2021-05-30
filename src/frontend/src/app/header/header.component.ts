import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*if (typeof window.nw !== 'undefined') {
      window.nw.Window.get().showDevTools();
    }*/
  }

  headerToolbarClose(): void {
    console.log(window.nw)
    console.log(">", "HeaderComponent", "headerToolbarClose()");
    if (typeof window.nw == 'undefined') return;
    window.nw.Window.get().close();
  };

  headerToolbarMin(): void {
    console.log(window.nw)
    console.log(">", "HeaderComponent", "headerToolbarMin()");
    if (typeof window.nw == 'undefined') return;
    window.nw.Window.get().minimize()
  };
  headerToolbarFullscreen(): void {
    console.log(window.nw)
    console.log(">", "HeaderComponent", "headerToolbarFullscreen()");
    if (typeof window.nw == 'undefined') return;
    window.nw.Window.get().toggleFullscreen()
  };



}
