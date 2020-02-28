import {Component, OnInit} from '@angular/core';
import {IUser} from '../user/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  width = 200;
  data: IUser[] = [];
  userList: IUser[] = [
    {
      name: 'Tuan',
      email: 'trananhtuan@gmail.com',
      address: 'nam dinh',
      phone: 32435345
    },
    {
      name: 'TuanTran',
      email: 'trananhtuan2710@gmail.com',
      address: 'nam dinh',
      phone: 3243534532
    },
    {
      name: 'Ngoc Anh',
      email: 'ngocanh@gmail.com',
      address: 'nam dinh',
      phone: 323224532
    }
  ];

  constructor() {
  }

  search(event) {
    let keyword = event.target.value;
    for (let user of this.userList) {
      if (keyword === user.name) {
        this.data.push(user);
      }
    }
    if (this.data.length > 0) {
      this.userList = this.data;
    }
  }


  ngOnInit(): void {
  }

}
