import { FormControl } from "@angular/forms";

export const API_URL='https://pixabay.com/api/?key=22856835-db274bb2ec7cac78afc95a071'

export const FILTER_FORM = Object.assign({}, {
    image_type: new FormControl('', { nonNullable: true }),
    order: new FormControl('', { nonNullable: true }),
    colors: new FormControl('', { nonNullable: true }),
    category: new FormControl('', { nonNullable: true }),
    safesearch: new FormControl(false, { nonNullable: true }),
})