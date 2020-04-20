import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Autenticacao } from "../../autenticacao.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null),
    nome_completo: new FormControl(null),
  });

  constructor(public autenticacao: Autenticacao) {}

  ngOnInit(): void {}

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit("cadastro");
  }

  public autenticar(): void {
    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    );
  }
}
