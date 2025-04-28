import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {TranslocoPipe, TranslocoService} from '@ngneat/transloco';
import {LanguageService} from '../shared/services/language.service';
import {MatFormField} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';

@Component({
  selector: 'app-nav-menu',
  imports: [
    MatIcon,
    MatIconButton,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TranslocoPipe,
    MatFormField,
    MatSelect,
    MatOption
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  selectedLanguage: string;

  constructor(
    private readonly translocoService: TranslocoService,
    private readonly languageService: LanguageService
  ) {
    this.selectedLanguage = this.translocoService.getActiveLang();
  }

  changeLanguage(language: string): void {
    this.languageService.switchLanguage(language);
  }
}
