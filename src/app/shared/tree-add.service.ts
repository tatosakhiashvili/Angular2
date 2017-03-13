import { Injectable, EventEmitter, Output } from '@angular/core'

@Injectable()
export class TreeAddService {

    @Output() editSubscribed = new EventEmitter();

    getTreeAddSubscription() {
        return this.editSubscribed;
    }

    editTree(item: any) {
        this.editSubscribed.emit(item);
    }
}