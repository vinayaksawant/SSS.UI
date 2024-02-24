import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  files$?: Observable<FileUpload[]>;

  @ViewChild('form', { static: false}) imageUploadForm?: NgForm;
  @Output() fileList = new EventEmitter <FileUpload[]> ();

  constructor(private fileUploadService: FileUploadService) {

  }
  ngOnInit(): void {
    this.getFiles();
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
          //console.log(response);
          this.imageUploadForm?.resetForm();
          this.getFiles();
        }
      });
    }
  }

  selectImage(file: FileUpload): void {
    this.fileUploadService.selectFile(file);
  }

  UploadCompleted () : void {
    this.fileUploadService.fileSelectionComplete();
    this.fileList.emit(this.fileUploadService.jobpostingFilesFromDB);
  }

  private getFiles() {
    this.files$ = this.fileUploadService.getAllFileUploads();
  }

}
