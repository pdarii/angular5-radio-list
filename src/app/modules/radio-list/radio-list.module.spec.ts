import { RadioListModule } from './radio-list.module';

describe('RadioListModule', () => {
  let radioListModule: RadioListModule;

  beforeEach(() => {
    radioListModule = new RadioListModule();
  });

  it('should create an instance', () => {
    expect(radioListModule).toBeTruthy();
  });
});
