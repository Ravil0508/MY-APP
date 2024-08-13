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
  public placeHolder = 'Поиск';

  onSearch() {
    this.search.emit(this.searchInput);
  }

  onFocus() {
    const inputElement = document.getElementById('float-input') as HTMLInputElement;
    if (inputElement) {
      inputElement.placeholder = '';
    }
  }

  onBlur() {
    const inputElement = document.getElementById('float-input') as HTMLInputElement;
    if (inputElement && this.searchInput.trim() === '') {
      inputElement.placeholder = 'Поиск';
    }
  }
}
