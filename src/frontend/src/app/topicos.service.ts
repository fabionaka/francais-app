import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicosService {

  constructor(private http: HttpClient) { }

  getTopicos() {
    return this.http.get('/rest/topicos');
  }

  salvarTopico(descricao) {
    return this.http.post('/rest/topicos', {
      tipo: "verbo",
      descricao: descricao
    })
  }
  deleteTopico(data) {
    var url: string;
    console.log(data);
    
    if (data.tipo == 'verbo') {
      url = '/rest/topicos/verbo/' + data.descricao;
    }
    console.log(url);
    return this.http.delete(url);
  }
}
