import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopicosService } from 'src/app/topicos.service';

@Component({
  selector: 'app-topicos-modal',
  templateUrl: './topicos-modal.component.html',
  styleUrls: ['./topicos-modal.component.less']
})
export class TopicosModalComponent implements OnInit {

  constructor(private service: TopicosService) { }
  @Input() open: boolean | number;
  @Output() closed = new EventEmitter<boolean>();
  descricao: string;

  ngOnInit(): void { }

  public close(): void {
    console.log(">", "app-topicos-modal", 'close()');
    this.open = false;
    this.closed.emit(this.open);
  }
  public submeter(): void {
    console.log(">", "app-topicos-modal", 'submeter()');
    if (this.descricao !== '' && typeof this.descricao !== 'undefined') {
      this.service.salvarTopico(this.descricao).subscribe(data => {
        console.log(data)
        this.open = false;
        this.closed.emit(this.open);
      }, error => { });
    }

  }
}
