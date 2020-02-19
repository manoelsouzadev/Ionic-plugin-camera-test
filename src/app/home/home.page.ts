import { Component } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  photo: string = '';

  constructor(private camera: Camera) {}

  takePicture() {
    this.photo = '';

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    };

    this.camera
      .getPicture(options)
      .then(
        ImageData => {
          let base64Image = 'data:image/jpeg;base64,' + ImageData;
          this.photo = base64Image;
        },
        err => {
          console.log(err);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }
}
