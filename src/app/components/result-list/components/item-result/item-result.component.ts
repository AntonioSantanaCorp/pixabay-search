import { Component, ElementRef, Input, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ImageResult } from 'src/app/core/interfaces/main.interface';
import { NgOptimizedImage } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NumberSuffixPipe } from 'src/app/pipes/number-suffix.pipe';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-item-result',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NumberSuffixPipe,
    MatMenuModule
  ],
  templateUrl: './item-result.component.html',
  styleUrls: ['./item-result.component.scss']
})
export class ItemResultComponent {
  @Input({ required: true }) public itemResult!: ImageResult

  private readonly _renderer2 = inject(Renderer2)

  private readonly _elemRef = inject(ElementRef)

  onDowloadFile() {
    fetch(this.itemResult.largeImageURL)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'image', { type: blob.type })
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load', () => {
          const aTag = this.createLinkTag(fileReader, file)
          this._renderer2.appendChild(this._elemRef.nativeElement, aTag)
          aTag.click()
          this._renderer2.removeChild(this._elemRef.nativeElement, aTag)
        })
      })
  }

  private createLinkTag(fileReader: FileReader, file: File) {
    const [, fileType] = file.type.split('/')
    const aTag = this._renderer2.createElement('a')
    aTag.href = fileReader?.result
    aTag.download = `image.${fileType}`

    return aTag
  }
}
