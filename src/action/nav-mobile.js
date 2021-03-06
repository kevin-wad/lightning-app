/**
 * @fileOverview actions that wrap navigation for mobile between views
 * behing a platform independant api. These actions should be pretty dumb
 * and only change the route to be rendered in the user interface.
 */

class NavAction {
  constructor(store, Navigation) {
    this._store = store;
    this._Navigation = Navigation;
  }

  setTopLevelNavigator(navigatorRef) {
    this._navigate = (routeName, params) =>
      navigatorRef.dispatch(this._Navigation.navigate({ routeName, params }));
    this._store.navReady = true;
  }

  goLoader() {
    this._navigate('Loader');
  }

  goSelectSeed() {
    this._navigate('SelectSeed');
  }

  goSeedIntro() {
    this._navigate('SeedIntro');
  }

  goSeed() {
    this._navigate('Seed');
  }

  goSeedVerify() {
    this._navigate('SeedVerify');
  }

  goRestoreSeed() {
    this._navigate('RestoreSeed');
  }

  goRestorePin() {
    this._navigate('RestorePin');
  }

  goSeedSuccess() {
    this._navigate('SeedSuccess');
  }

  goSetPassword() {
    this._navigate('SetPassword');
  }

  goSetPasswordConfirm() {
    this._navigate('SetPasswordConfirm');
  }

  goPassword() {
    this._navigate('Password');
  }

  goResetPasswordCurrent() {
    this._navigate('ResetPasswordCurrent');
  }

  goNewAddress() {
    this._navigate('NewAddress');
  }

  goLoaderSyncing() {
    this._navigate('LoaderSyncing');
  }

  goWait() {
    this._navigate('Wait');
  }

  goHome() {
    this._navigate('Home');
  }

  goPay() {
    this._navigate('Pay');
  }

  goPayLightningConfirm() {
    this._navigate('PayLightningConfirm');
  }

  goPayLightningDone() {
    this._navigate('PayLightningDone');
  }

  goPaymentFailed() {
    this._navigate('PaymentFailed');
  }

  goPayBitcoin() {
    this._navigate('PayBitcoin');
  }

  goPayBitcoinConfirm() {
    this._navigate('PayBitcoinConfirm');
  }

  goPayBitcoinDone() {
    this._navigate('PayBitcoinDone');
  }

  goInvoice() {
    this._navigate('Invoice');
  }

  goInvoiceQR() {
    this._store.displayCopied = false;
    this._navigate('InvoiceQR');
  }

  goChannels() {
    this._navigate('Channels');
  }

  goChannelDetail() {
    this._navigate('ChannelDetail');
  }

  goChannelDelete() {
    this._navigate('ChannelDelete');
  }

  goChannelCreate() {
    this._navigate('ChannelCreate');
  }

  goTransactions() {
    this._navigate('Transactions');
  }

  goTransactionDetail() {
    this._navigate('TransactionDetail');
  }

  goNotifications() {
    this._navigate('Notifications');
  }

  goSettings() {
    this._navigate('Settings');
  }

  goSettingsUnit() {
    this._navigate('SettingsUnit');
  }

  goSettingsFiat() {
    this._navigate('SettingsFiat');
  }

  goCLI() {
    this._navigate('CLI');
  }

  goCreateChannel() {
    this._navigate('CreateChannel');
  }

  goDeposit() {
    this._store.displayCopied = false;
    this._navigate('Deposit');
  }
}

export default NavAction;
