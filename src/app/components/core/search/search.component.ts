import {Component, EventEmitter, Input, Output} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  public searchInput = '';

  onSearch() {
    this.search.emit(this.searchInput);
  }
}
