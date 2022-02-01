<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use Illuminate\Http\UploadedFile;
use App\Libraries\Utilities\Upload\UploadImgUser;

class UploadFileTest extends TestCase
{

    protected function createImageFake($type){
        $file = UploadedFile::fake();
        return $file->create('fake_image', 0, $type);
    }

    protected function createUploadImgUser($file){
        return new UploadImgUser($file, 'user-perfil-test');
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_valid_type_file_accepts_png_and_jpg()
    {
        $file = $this->createImageFake('image/png');
        $upload = $this->createUploadImgUser($file);
        $this->assertTrue($upload->validateType());

        $file = $this->createImageFake('image/jpeg');
        $upload = $this->createUploadImgUser($file);
        $this->assertTrue($upload->validateType());

        $file = $this->createImageFake('image/gif');
        $upload = $this->createUploadImgUser($file);
        $this->assertFalse($upload->validateType());
    }

    public function test_save_img_directory()
    {
        $file = $this->createImageFake('image/png');
        $upload = $this->createUploadImgUser($file);
        $this->assertFileExists('storage/app/'.$upload->store());

        $file = $this->createImageFake('image/jpeg');
        $upload = $this->createUploadImgUser($file);
        $this->assertFileExists('storage/app/'.$upload->store());
    }
}
