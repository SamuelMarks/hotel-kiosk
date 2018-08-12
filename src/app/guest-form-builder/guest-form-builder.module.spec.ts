import { GuestFormBuilderModule } from './guest-form-builder.module';

describe('GuestFormBuilderModule', () => {
  let guestFormBuilderModule: GuestFormBuilderModule;

  beforeEach(() => {
    guestFormBuilderModule = new GuestFormBuilderModule();
  });

  it('should create an instance', () => {
    expect(guestFormBuilderModule).toBeTruthy();
  });
});
