import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { Observable } from 'rxjs';
import { FileUpload } from '../models/fiile-upload.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'SSS-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
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
