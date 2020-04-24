import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../providers/country-data.service';
import { ColumnItem, CountryItem } from './country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  pageIndex = 1;
  pageSize = 15;
  pageSizeOptions = [15,30,50];
  total = 1;
  dataSet: CountryItem[] = [];
  loading = true;
  sortValue = null;
  sortKey = null;

  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: CountryItem, b: CountryItem) => a.name.localeCompare(b.name),
    },
    {
      name: 'Flag',
    },
    {
      name: 'Area',
      sortOrder: null,
      sortFn: (a: CountryItem, b: CountryItem) => a.area - b.area,
      sortDirections: ['descend', 'ascend']
    },
    {
      name: 'Population',
      sortOrder: null,
      sortFn: (a: CountryItem, b: CountryItem) => a.population - b.population,
      sortDirections: ['descend', 'ascend']
    },
    {
      name: 'Captial',
      sortOrder: null,
      sortFn: (a: CountryItem, b: CountryItem) => a.capital.localeCompare(b.capital),
    },
    {
      name: 'Region(Sub)',
      sortOrder: null,
      sortFn: (a: CountryItem, b: CountryItem) => a.subregion.localeCompare(b.subregion),
    },
    {
      name: 'CIOC'
    }, 
    {
      name: 'Domain'
    }
  ];

  constructor(private countryService: CountryDataService) { }

  ngOnInit() {
    this.searchData();
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.countryService.getAll().subscribe((data: CountryItem[]) => {
      this.total = 250;
      this.dataSet = data;
    });
  }
}
