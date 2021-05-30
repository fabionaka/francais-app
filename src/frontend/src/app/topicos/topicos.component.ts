import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TopicosService } from "../topicos.service"
import { Topico } from "../topico"

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.less'],

})
export class TopicosComponent implements OnInit {

  constructor(private el: ElementRef, private service: TopicosService) { }
  windowHeight = '100px';
  contentHeight;
  buttonText: string = 'Encore';
  topicos;
  topico: Topico = {
    verbo: '',
    pronome: '',
    tipo: ''
  };
  openedModal: boolean = false;
  listModal: boolean = false;
  @ViewChild('div.topicos-wrapper') input;

  ngOnInit(): void {
    var height = (window.innerHeight) - 50;
    this.windowHeight = height + "px";
    this.contentHeight = this.el.nativeElement.children[0].offsetHeight;

    this.obterListaConteudo();
  }

  ngAfterViewInit(): void { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    var height = (event.target.innerHeight) - 50;
    this.windowHeight = height + "px";
  }

  private obterListaConteudo() {
    this.service.getTopicos().subscribe(result => {
      this.topicos = result;
      this.updateTopic();
    }, error => {
      console.log(error)
    });
  }

  public updateTopic(): void {
    this.topico = {
      verbo: this.topicos.verbos[Math.floor(Math.random() * this.topicos.verbos.length)],
      pronome: this.topicos.pessoas[Math.floor(Math.random() * this.topicos.pessoas.length)],
      tipo: this.topicos.tipos[Math.floor(Math.random() * this.topicos.tipos.length)],
    }
  }

  public newVerb() {
    this.openedModal = true;
  }
  public modalResponse(event) {
    this.openedModal = event;
    this.obterListaConteudo();
  }

  public listVerb(): void {
    this.listModal = true;
  }
  listResponse(event) {
    this.listModal = false;
    this.obterListaConteudo();
  }

}
