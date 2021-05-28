import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  client: Client[]
  displayedColumns = ['id', 'name', 'cpf', 'cidade', 'uf', 'action']
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(client => {
      this.client = client
    })
  }

}
