import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FileUpload } from '../models/fiile-upload.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  selectedImage: BehaviorSubject<FileUpload> = new BehaviorSubject<FileUpload>({
    id: '',
    fileExtenstion: '',
    fileName: '',
    title: '',
    url: ''
  });

  constructor(private http: HttpClient) { }

  getAllFileUploads(): Observable<FileUpload[]> {
    return this.http.get<FileUpload[]>(`${environment.apiBaseUrl}/api/ImageFiles`);
  }


  PostFileUpload(file: File, fileName: string, title: string): Observable<FileUpload> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);
    formData.append('fileType', "JobPosting");    

    return this.http.post<FileUpload>(`${environment.apiBaseUrl}/api/ImageFiles`, formData);
  }

  selectImage(image: FileUpload): void {
    this.selectedImage.next(image);
  }

  onSelectImage(): Observable<FileUpload> {
    return this.selectedImage.asObservable()
  }

}
