import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from 'src/app/models/imenu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  itemId: number;
  menu: IMenuItem[];
  constructor(public activatedRoute: ActivatedRoute) {
    this.itemId = this.activatedRoute.snapshot.params['id'];
    ///////////////////////////////////////////////////////
    this.menu = [
      {
        img: 'https://images.pexels.com/photos/615003/pexels-photo-615003.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Suits',
        description: 'Lorem ipsum dolor sit amet consectetur sit consectetur.',
        price: 15,
      },
      {
        img: 'https://media.istockphoto.com/id/1326352310/photo/blank-tracksuit-top-mockup.jpg?b=1&s=612x612&w=0&k=20&c=d7aKvaOaSsFsd2wM2ovS29oaRTeHwhk-Is8ZUo4H_8U=',
        name: 'Jackets',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 40,
      },
      {
        img: 'https://media.istockphoto.com/id/1152838910/photo/male-dark-blue-blazer-on-isolated-background.jpg?b=1&s=612x612&w=0&k=20&c=dqOJYToFhRxumgENJkBIM34a6M7cKBNN7lFOPj2zOMw=',
        name: 'Plazers',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 35,
      },
      {
        img: 'https://media.istockphoto.com/id/1323480815/photo/navy-t-shirt.jpg?b=1&s=612x612&w=0&k=20&c=jsXVegEegNujb6j6EH_gsjdVGaK9f-CUM786GOkTCEU=',
        name: 'T-shirt',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 25,
      },
      {
        img: 'https://images.pexels.com/photos/7679660/pexels-photo-7679660.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Belts',
        description: 'Lorem ipsum dolor sit amet consectetur amet consectetur.',
        price: 45,
      },
    ];
  }
  ngOnInit(): void {}
}
