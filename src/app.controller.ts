import { Controller, Get, Post, UploadedFile,UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor} from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  


  @Post()
  @UseInterceptors(
    FileInterceptor('image'),
  )
  async uploadedFile(@UploadedFile() file) {
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return response;
  }


  /// this is how you upload single file 



  @Post('multiple')
@UseInterceptors(
  FilesInterceptor('image', 20)
)
async uploadMultipleFiles(@UploadedFiles() files) {
  const response = [];
  files.forEach(file => {
    const fileReponse = {
      originalname: file.originalname,
      filename: file.filename,
    };
    response.push(fileReponse);
  });
  return response;
}












}
