import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public base64Image: string = null;
  imgSrc: any;
  public photos: any;
  constructor(public navCtrl: NavController, private camera: Camera) {}

  ngOnInit() {
    this.photos = [];
  }

  takePicture() {
    const options: CameraOptions = {
      targetWidth: 500,
      targetHeight: 500,
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        // this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(imageData);
        this.photos.reverse();
        alert(imageData);
      },
      err => {
        // Handle error
        alert(err);
      }
    );
  }

    takePicture2() {
    const options: CameraOptions = {
      targetWidth: 500,
      targetHeight: 500,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64Image = "data:image/jpeg;base64," + imageData;
       
        alert(this.base64Image);
      },
      err => {
        // Handle error
        alert(err);
      }
    );
  }

  deletePhoto(id){
    alert(id)
  }
}
