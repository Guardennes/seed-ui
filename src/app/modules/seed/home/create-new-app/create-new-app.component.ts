import { Component, ViewEncapsulation } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'create-new-app',
    templateUrl: './create-new-app.component.html',
    styleUrls: ['./create-new-app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSlideToggleModule,
    ],
})
export class CreateNewAppComponent {
    createAppForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
        this.createAppForm = this._formBuilder.group({
            appName: ['', [Validators.required, Validators.maxLength(30)]],
            region: ['us', Validators.required],        // 'us', 'eu', etc.
            addPipeline: [false],
        });
    }

    // For demonstration, just log the form values
    onCreateApp(): void {
        if (this.createAppForm.valid) {
            console.log('Create new app with values:', this.createAppForm.value);
            // TODO: call your service or backend logic here
        }
    }

    onCancel(): void {
        // For demonstration, you can reset or navigate away
        this.createAppForm.reset();
        console.log('App creation canceled!');
    }
}
