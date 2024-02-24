import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FileUpload } from '../models/file-upload.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  selectedFile: BehaviorSubject<FileUpload> = new BehaviorSubject<FileUpload>({
    id: '',
    fileExtenstion: '',
    fileName: '',
    title: '',
    url: ''
  });

  
  public jobpostingFilesFromDB?: FileUpload[];
  
  // jobpostingFiles: BehaviorSubject<FileUpload[]> = new BehaviorSubject<FileUpload[]>([{
  //   id: '',
  //   fileExtenstion: '',
  //   fileName: '',
  //   title: '',
  //   url: ''
  // }]);  


  constructor(private http: HttpClient) { 
  }

  getAllFileUploads(): Observable<FileUpload[]> {
    return this.http.get<FileUpload[]>(`${environment.apiBaseUrl}/api/ImageFiles`);
  }

  getAllFileUploads_ByEntityID_ByEntityType(): Observable<FileUpload[]> {
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

  selectFile(file: FileUpload): void {
    this.selectedFile.next(file);
  }

  fileSelectionComplete () : void {
    this.getAllFileUploads_ByEntityID_ByEntityType().subscribe({
      next: x=>this.jobpostingFilesFromDB = x
    })
    //this.jobpostingFiles.next(this.jobpostingFiles);
    console.log(this.jobpostingFilesFromDB);
  }

  // onfileSelectionComplete(): Observable<FileUpload> {
  //     return this.jobpostingFiles.asObservable();
  //   }  

  onSelectImage(): Observable<FileUpload> {
    return this.selectedFile.asObservable()
  }

}
