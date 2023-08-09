import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { InfoProjectComponent } from './components/info-project/info-project.component';
import { MatDialog } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UserMenuComponent,
    InfoProjectComponent,
    MatTooltipModule,
    SwitchThemeComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  private readonly _dialog = inject(MatDialog)

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/icons8-linkedin.svg'),
      { viewBox: '0,0,235,235' }
    )

    iconRegistry.addSvgIcon(
      'angular-icons',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/icons8-angular.svg'),
      { viewBox: '0,0,240,240' }

    )
  }

  openInfoDialog() {
    this._dialog.open(InfoProjectComponent)
  }
}
