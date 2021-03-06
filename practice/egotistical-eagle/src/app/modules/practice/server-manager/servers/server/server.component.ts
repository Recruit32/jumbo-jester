import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../services/servers.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'sm-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['pineapple'];
        }
      );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(1);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id'])
    //   }
    // );
  }

  getBadgeClass() {
    if (this.server.status === 'online') {
      return 'badge badge-success';
    }
    return 'badge badge-danger';
  }

  isEditUrl() {
    return this.router.url.includes('edit');
  }

  onEdit() {
    // queryParamsHandling: 'preserve' --> preserve the query params
    this.router.navigate(
      ['edit'], 
      { relativeTo: this.route, queryParamsHandling: 'preserve' }
    );
  }
}