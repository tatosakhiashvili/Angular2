import { Component, OnInit, EventEmitter } from '@angular/core';
import { HomeService } from './../home.service';
import { TreeAddService } from './../shared/tree-add.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  inputs: ['items', 'depth'],
  outputs: ['addedOne', 'addedTwo']
})
export class TreeComponent implements OnInit {

  items: any[];
  depth: number;

  constructor(private homeService: HomeService, private treeAddService: TreeAddService) { }

  ngOnInit() {

  }

  showHideChildren(item: any) {
    if (item.childrenAreShown) {
      this.hideChild(item);
    } else {
      this.showChild(item);
    }
  }

  showChild(item: any) {
    item.childrenAreShown = true;
    for (let tree of item.children) {
      tree.visible = true;
    }
  }

  hideChild(item: any) {
    item.childrenAreShown = false;
    if (item.children) {
      for (let tree of item.children) {
        this.hideChild(tree);
      }
    }
  }

  addNode(item: any) {

  }

  editNode(node: any) {
    this.treeAddService.editTree({ id: node.id, name: node.name });
  }

  removeNode(id: number) {
    /*if (confirm("are you sure want to remove the item?")) {*/
    this.homeService.removeNode(id);
    /*}*/
  }
}