import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Bd } from "../../bd.service";
@Component({
  selector: "app-incluir-publicacao",
  templateUrl: "./incluir-publicacao.component.html",
  styleUrls: ["./incluir-publicacao.component.css"],
})
export class IncluirPublicacaoComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    titulo: new FormGroup(null),
  });

  constructor(private bd: Bd) {}

  ngOnInit(): void {}

  public publicar(): void {
    this.bd.publicar();
  }
}
