import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings, fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit{
  listing: Listing = {
    id: '',
    name: '',
    description: '',
    price: '0',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id) ?? {
      id: '',
      name: '',
      description: '',
      price: '0',
    };
  }

  onSubmit(): void {
    alert("Saving changes to the listing...");
    this.router.navigateByUrl('/my-listings')
  }

}
