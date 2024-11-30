import { Component, inject, OnInit, signal } from '@angular/core';
import { CatalogueService } from "@/auth/services";
import { Languages } from "@/auth/models";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  private readonly catalogService = inject(CatalogueService);

  languages = signal<Languages[]>([]);

  ngOnInit(): void {
    this.catalogService.findLanguages()
      .subscribe( languages =>
        this.languages.set(languages)
      );
  }

}
