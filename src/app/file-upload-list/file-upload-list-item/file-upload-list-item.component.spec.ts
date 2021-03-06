import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadListItemComponent } from './file-upload-list-item.component';

describe('FileUploadListItemComponent', () => {
  let component: FileUploadListItemComponent;
  let fixture: ComponentFixture<FileUploadListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
