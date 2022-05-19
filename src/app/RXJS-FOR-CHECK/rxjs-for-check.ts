/**

public payInvoice(
  paymentMethod: PaymentMethodParameters<AllowedPaymentAchMethodsTypes | AllowedPaymentStoredMethodsTypes>,
  invoiceNum: string,
  payInvoiceDetails: PayInvoiceDetails
): Observable<PayInvoiceInDto> {
  return this.appConfigService.getConfig(AppConfigurationItemsEnum.FORTE_LOGIN_ID).pipe(
    first(),
    tap(() => {
      this.dataService.setLoadingStatus(true);
      this.errorsService.flush();
    }),
    switchMap(forteLoginId => {
      const dto = BUILD_PAYMENT_METHODS_DTO[paymentMethod.type](paymentMethod.credentials, forteLoginId);
      return this.forteApiService.createOnetimeToken(dto).pipe(
        first(),
        switchMap(forteResponse =>
          this.payInvoicesApiService.payInvoice(
            buildPaymentMethod({
              details: payInvoiceDetails,
              response: forteResponse,
              invoiceNum
            }))
        ),
        catchError(error =>
          this.payInvoicesApiService.payInvoice(
            buildPaymentMethod({
              details: payInvoiceDetails,
              response: error,
              invoiceNum
            }))
        ),
        tap(response => {
          this.invoices$.next(null);
          this.successPaymentResponse$.next(response);
        }),
        finalize(() => {
          this.dataService.setLoadingStatus(false);
        })
      );
    })
  );
}

 **/
