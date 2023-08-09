import { Component, OnInit, Renderer2, inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { APP_THEME, DARK_THEME, LIGHT_THEME } from '../../core/constants/main.constant';

@Component({
  selector: 'app-switch-theme',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss']
})
export class SwitchThemeComponent {

  private readonly _renderer2 = inject(Renderer2)

  private readonly _document = inject(DOCUMENT)

  protected icon = signal<string>(DARK_THEME.icon)

  protected onSwitchTheme() {
    const hasDarkTheme = this._document.body.classList.contains(DARK_THEME.cssClass)
    this.changeAppTheme(hasDarkTheme)    
  }

  private changeAppTheme(hasDarkTheme: boolean) {

    if (hasDarkTheme) {
      this._renderer2.removeClass(this._document.body, DARK_THEME.cssClass);
      this._renderer2.addClass(this._document.body, LIGHT_THEME.cssClass);
      this.icon.set(DARK_THEME.icon)
    } else {
      this._renderer2.removeClass(this._document.body, LIGHT_THEME.cssClass);
      this._renderer2.addClass(this._document.body, DARK_THEME.cssClass);
      this.icon.set(LIGHT_THEME.icon)
    }
  }
}
