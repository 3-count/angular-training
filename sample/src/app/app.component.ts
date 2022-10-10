import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  constructor(private readonly __httpClient:HttpClient) {
  }

  execute(): void {
    console.log("bbb");
  }

  showPdf(): void {
    this.__httpClient.post("https://localhost:7213/WeatherForecast/print", undefined, {responseType: 'blob'}).subscribe(
       blob => {
        const file = new Blob([blob], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        console.log(fileURL);
        // window.open(fileURL);
        const tab = window.open();
        if (tab) {
          // tab.document.write(`<html><head><title>sample.pdf</title></head><body height="100%" width="100%"><iframe src="${fileURL}" height="100%" width="100%"></body></html>`);
          tab.document.write(`<html><head><title>sample.pdf</title></head><body style="height: 100%;width: 100%;overflow: hidden;margin:0px;background-color: rgb(82, 86, 89);"><embed name="FA9BD3F524E47C336ED56335882BBF79" style="position:absolute; left: 0; top: 0;" width="100%" height="100%" src="${fileURL}" type="application/pdf" internalid="FA9BD3F524E47C336ED56335882BBF79"></body></html>`);
        }
        
        // tab?.document.write('<title>sample.pdf</title>');
       }
    );
    // this.__httpClient.post<string>("https://localhost:7213/WeatherForecast/print", undefined).subscribe(
    //    url => {
    //     window.open(url);
    //    }
    // );
    // window.open("https://www.pref.kyoto.jp/kenkoshishin/documents/no_1.pdf");
  }
}
