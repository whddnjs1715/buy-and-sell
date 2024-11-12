import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

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
    private router: Router,
    private listingsService: ListingsService,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return
    this.listingsService.getListingById(id)
      .subscribe(listing => this.listing = listing);
  }

  onSubmit({ name, description, price}: Listing): void {
    this.listingsService.editListing(this.listing.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings')
      })
  }

}
