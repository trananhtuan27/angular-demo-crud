import {Component, OnInit} from '@angular/core';
import {IUser} from '../user/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isShowForm = false;
  name = '';
  email = '';
  address = '';
  phone;
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
    this.data = this.userList;
  }

  filterSearch(value): IUser[] {
    return this.data.filter(user => user.name.indexOf(value) !== -1);
  }

  search(value) {

    this.userList = this.filterSearch(value);
  }

  addUsers() {
    this.userList.unshift({
      name: this.name,
      email: this.email,
      address: this.address,
      phone: this.phone,
    });
  }

  removeUsers(index) {
    if (confirm('Ban co muon xoa khong?')) {
      this.userList.splice(index, 1);
    }
  }

// toggleEdit(index){
//     this.users[index].hide = false;
// }
  ngOnInit(): void {
  }

}
