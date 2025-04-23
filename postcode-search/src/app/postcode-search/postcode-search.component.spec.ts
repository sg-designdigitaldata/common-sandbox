import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeSearchComponent } from './postcode-search.component';

describe('PostcodeSearchComponent', () => {
  let component: PostcodeSearchComponent;
  let fixture: ComponentFixture<PostcodeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcodeSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
