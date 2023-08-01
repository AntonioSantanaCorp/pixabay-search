import { FormControl } from "@angular/forms";

export const FILTER_FORM = Object.assign({}, {
    image_type: new FormControl('', { nonNullable: true }),
    order: new FormControl('', { nonNullable: true }),
    colors: new FormControl('', { nonNullable: true }),
    category: new FormControl('', { nonNullable: true }),
    safesearch: new FormControl(false, { nonNullable: true }),
})