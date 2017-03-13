import { Injectable } from '@angular/core';
import { Node } from './tree/tree';

@Injectable()
export class HomeService {

  treeItems: Node[];

  constructor() {
    this.treeItems = [
      new Node(1, '1', [
        new Node(2, '1.1', [
          new Node(3, '1.1.1', [
            new Node(4, '1.1.1.1', [
              new Node(5, '1.1.1.1.1', [
                new Node(6, '1.1.1.1.1.1', [
                  new Node(7, '1.1.1.1.1.1', [
                    new Node(8, '1.1.1.1.1.1', [
                      new Node(9, '1.1.1.1.1.1', [

                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      new Node(10, '2', [
        new Node(11, '2.1', [])
      ])
    ]
  }

  getTreeItems(): any {
    return this.treeItems;
  }

  addTreeItem(item: any) {
    this.treeItems.push(item);
  }

  removeNode(id: number) {
    this.removeNodeIfExists(this.treeItems, id);
  }

  editNode(id: number, name: string) {
    this.editNodeIfExists(this.treeItems, id, name);
  }

  private removeNodeIfExists(items: Node[], id: number) {
    for (let node of items) {
      if (node.children) {
        var index = node.children.map(function (x) { return x.id }).indexOf(id);
        if (index > -1) {
          node.children.splice(index, 1);
        } else {
          this.removeNodeIfExists(node.children, id);
        }
      }

      if (node.id == id) {
        items.splice(items.map(function (x) { return x.id }).indexOf(id), 1);
      }
    }
  }

  private editNodeIfExists(items: Node[], id: number, name: string) {
    for (let node of items) {
      if (node.id == id) {
        node.name = name;
        console.log('Edited ...')
      } else {
        if (node.children) { 
          this.editNodeIfExists(node.children, id, name);
        }
      }
    }
  }
}