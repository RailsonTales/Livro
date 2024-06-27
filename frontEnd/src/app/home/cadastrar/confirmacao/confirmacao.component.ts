import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.scss'
})
export class ConfirmacaoComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoComponent>,
  ) { }

  fechar(): void {
    this.dialogRef.close();
  }
}
