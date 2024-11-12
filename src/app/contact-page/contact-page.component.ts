import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit{
  email: string = '';
  message: string = '';
  listing: Listing = {
    id: '',
    name: '',
    description: '',
    price: '0',
    views: '0'
  };

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return
    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
      })
    this.message = `Hi I'm interested in your ${this.listing.name.toLocaleLowerCase()}!`
  }

  sendMessage(): void {
    alert('Your message has been sent!')
    this.router.navigateByUrl('/listings');
  }
}
