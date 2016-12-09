import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  constructor(private _routeParams: ActivatedRoute,
              private router:Router) { }

  websiteId : string;
  pageId : string;

  ngOnInit() {
   this.getUrlParams();
  }

  addNewWidget() : void {
    this.router.navigate(['/add-widget/website/' + this.websiteId + '/page/'+this.pageId]);
  }

  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
    });
  }

}