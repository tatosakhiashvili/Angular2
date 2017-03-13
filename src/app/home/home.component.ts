import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service';
import { TreeAddService } from './../shared/tree-add.service';
import { TreeActionEnum } from './../shared/tree.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  treeItemsArray: any[];
  parentId: number;
  editModeItem: any;
  actionMode: TreeActionEnum = TreeActionEnum.Edit;

  constructor(private homeService: HomeService, private treeAddService: TreeAddService) {

  }

  ngOnInit() {
    this.loadTreeItems();
    this.treeAddService.getTreeAddSubscription().subscribe(x => {
      this.actionMode = TreeActionEnum.Edit;
      console.log('xxxx');
    });
  }

  loadTreeItems() {
    this.treeItemsArray = this.homeService.getTreeItems();
  }

  addTreeItem() {
    this.loadTreeItems();
  }

  resetMode() {
    this.actionMode = TreeActionEnum.Default;
  }
}