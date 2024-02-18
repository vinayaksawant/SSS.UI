import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageUpload } from '../models/image-upload.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  selectedImage: BehaviorSubject<ImageUpload> = new BehaviorSubject<ImageUpload>({
    id: '',
    fileExtenstion: '',
    fileName: '',
    title: '',
    url: ''
  });

  constructor(private http: HttpClient) { }

  getAllFileUploads(): Observable<ImageUpload[]> {
    return this.http.get<ImageUpload[]>(`${environment.apiBaseUrl}/api/ImageFiles`);
  }


  PostFileUpload(file: File, fileName: string, title: string): Observable<ImageUpload> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);
    formData.append('fileType', "JobPosting");    

    return this.http.post<ImageUpload>(`${environment.apiBaseUrl}/api/ImageFiles`, formData);
  }

  selectImage(image: ImageUpload): void {
    this.selectedImage.next(image);
  }

  onSelectImage(): Observable<ImageUpload> {
    return this.selectedImage.asObservable()
  }

}
