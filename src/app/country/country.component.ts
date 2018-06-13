import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../providers/country-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  pageIndex = 1;
  pageSize = 10;
  total = 1;
  dataSet = [];
  loading = true;
  sortValue = null;
  sortKey = null;

  constructor(private countryService: CountryDataService) { }

  ngOnInit() {
    this.searchData();
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.countryService.getAll().subscribe((data: any) => {
      this.loading = false;
      this.total = 250;
      this.dataSet = data;
    });
  }
}
