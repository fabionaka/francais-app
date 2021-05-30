import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopicosService } from 'src/app/topicos.service';

@Component({
  selector: 'app-topicos-list',
  templateUrl: './topicos-list.component.html',
  styleUrls: ['./topicos-list.component.less']
})
export class TopicosListComponent implements OnInit {

  constructor(private service: TopicosService) {
  }
  @Input() open: boolean | number = false;
  @Input() topicos;
  @Output() closed = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  delete(verbo) {
    console.log(">", "TopicosListComponent", "delete()", verbo);
    this.service.deleteTopico({ tipo: "verbo", descricao: verbo }).subscribe(response => {
      console.log(response);
      this.topicos = response;
    }, err => {
      console.log(err);
    })
  }

  close() {
    this.open = false;
    console.log(">", "TopicosListComponent", "close()");
    this.closed.emit(this.open);
  }

}
