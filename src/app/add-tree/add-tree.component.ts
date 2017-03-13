import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeAddService } from './../shared/tree-add.service';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-add-tree',
  templateUrl: './add-tree.component.html',
  styleUrls: ['./add-tree.component.css']
})
export class AddTreeComponent implements OnInit {

  editItemName: string;
  editItemId: number;
  @Input() set editItem(value: any) {
    if (value) {
      this.editItemName = value.name;
      this.editItemId = value.id;
    }
  };
  @Input() parentId: number;
  @Output() onSaveFinished = new EventEmitter();


  constructor(private treeAddService: TreeAddService, private homeService: HomeService) { }

  ngOnInit() {
  }

  addTreeItem() {
    this.homeService.editNode(this.editItemId, this.editItemName);
    this.onSaveFinished.emit({});
  }
}
