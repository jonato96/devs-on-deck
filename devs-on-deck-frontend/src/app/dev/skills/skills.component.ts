import { Component, inject, OnInit, signal } from '@angular/core';
import { CatalogueService } from "@/auth/services";
import { Framework, Languages } from "@/auth/models";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  private readonly catalogService = inject(CatalogueService);

  languages = signal<Languages[]>([]);
  selectedLanguages = signal<Languages[]>([]);

  frameworks = signal<Framework[]>([]);
  selectedFrameworks = signal<Framework[]>([]);

  ngOnInit(): void {
    this.catalogService.findLanguages()
      .subscribe( languages =>
        this.languages.set(languages)
      );
  }

  addLanguage(language: Languages) {
    this.selectedLanguages.update((currentItems) => {

      const exists = currentItems.some((item) => item.id === language.id);
      if (exists) return currentItems;

      if (currentItems.length < 5) return [...currentItems, language];

      return [...currentItems.slice(1), language];
    });
  }

  findFrameworks(): void {
    const languageIdList = this.selectedLanguages().map(language => language.id);
    this.catalogService.findFrameworks(languageIdList)
      .subscribe( f => this.frameworks.set(f) );
  }

}
