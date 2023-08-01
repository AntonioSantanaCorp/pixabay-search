export type FilterType = 'image_type' | 'order' | 'colors' | 'category'

export type Filter = { [key in FilterType]?: string; }
