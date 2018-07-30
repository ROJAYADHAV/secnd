// 
import { TodoformComponent } from "src/app/form/todoform/todoform.component";
import { FormBuilder } from "@angular/forms";

describe('Todoformcomponent', () => {
  var component:TodoformComponent;
  beforeEach(()=>{
    component=new TodoformComponent(new FormBuilder());
  });
  it('should create a form with 2 controls',()=>{
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();

  })
  it('should make the name control required',()=>{
    let control =component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should create an intsance of an component',()=>{
    expect(component).toBeTruthy();
  });
});