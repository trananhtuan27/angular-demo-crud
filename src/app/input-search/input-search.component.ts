import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() word = new EventEmitter();
  width = 200;
  value;

  constructor() {
  }

  sendData() {
    return this.word.emit(this.value);
  }

  ngOnInit(): void {
  }

}
