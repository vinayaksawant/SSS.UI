import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { Observable } from 'rxjs';
import { FileUpload } from '../models/file-upload.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'SSS-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() ParentComponentName : string = "";
  @Input() ParentComponentEntityId : string = "";
  
  private file?: File;
  fileName: string = '';
  title: string = '';
  images$?: Observable<FileUpload[]>;

  @ViewChild('form', { static: false}) imageUploadForm?: NgForm;

  constructor(private fileUploadService: FileUploadService) {

  }
  ngOnInit(): void {
    this.getImages();
  }

  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadImage(): void {
    if (this.file && this.fileName !== '' && this.title !== '') {
      // Image service to upload the image
      this.fileUploadService.PostFileUpload(this.file, this.fileName, this.title)
      .subscribe({
        next: (response) => {
          console.log(response);
          // this.imageUploadForm?.resetForm();
          // this.getImages();
        }
      });
    }
  }

  selectImage(image: FileUpload): void {
    this.fileUploadService.selectImage(image);
  }

  private getImages() {
    this.images$ = this.fileUploadService.getAllFileUploads();
  }

}
